/**
 * message.js - Message types for lopecode opencode port
 *
 * Simplified from opencode's message-v2.ts for browser use.
 * Uses plain JavaScript objects instead of Zod schemas.
 */

/**
 * Generate a unique ID
 * @returns {string}
 */
export function generateId() {
  return crypto.randomUUID();
}

/**
 * Create a User message
 * @param {Object} options
 * @param {string} options.sessionId - Session identifier
 * @param {string} options.agent - Agent name (e.g., "assistant")
 * @param {string} options.providerId - Provider ID (e.g., "anthropic", "openai")
 * @param {string} options.modelId - Model ID (e.g., "claude-sonnet-4-20250514")
 * @param {string} [options.system] - System prompt
 * @param {Object} [options.tools] - Enabled tools map
 * @returns {Object} User message
 */
export function createUserMessage({ sessionId, agent, providerId, modelId, system, tools }) {
  return {
    id: generateId(),
    sessionId,
    role: "user",
    time: {
      created: Date.now()
    },
    agent,
    model: {
      providerId,
      modelId
    },
    system,
    tools
  };
}

/**
 * Create an Assistant message
 * @param {Object} options
 * @param {string} options.sessionId - Session identifier
 * @param {string} options.parentId - Parent (user) message ID
 * @param {string} options.agent - Agent name
 * @param {string} options.providerId - Provider ID
 * @param {string} options.modelId - Model ID
 * @returns {Object} Assistant message
 */
export function createAssistantMessage({ sessionId, parentId, agent, providerId, modelId }) {
  return {
    id: generateId(),
    sessionId,
    role: "assistant",
    time: {
      created: Date.now(),
      completed: null
    },
    parentId,
    agent,
    providerId,
    modelId,
    error: null,
    cost: 0,
    tokens: {
      input: 0,
      output: 0,
      reasoning: 0,
      cache: { read: 0, write: 0 }
    },
    finish: null
  };
}

/**
 * Complete an assistant message
 * @param {Object} message - Assistant message to complete
 * @param {Object} options
 * @param {string} options.finish - Finish reason (e.g., "end_turn", "tool_use")
 * @param {Object} [options.tokens] - Token counts
 * @param {number} [options.cost] - Cost in dollars
 * @returns {Object} Completed message
 */
export function completeAssistantMessage(message, { finish, tokens, cost }) {
  return {
    ...message,
    time: {
      ...message.time,
      completed: Date.now()
    },
    finish,
    tokens: tokens || message.tokens,
    cost: cost ?? message.cost
  };
}

// ==================== Part Types ====================

/**
 * Create a Text part
 * @param {Object} options
 * @param {string} options.sessionId
 * @param {string} options.messageId
 * @param {string} options.text
 * @param {boolean} [options.synthetic] - Was this generated synthetically?
 * @returns {Object} TextPart
 */
export function createTextPart({ sessionId, messageId, text, synthetic = false }) {
  return {
    id: generateId(),
    sessionId,
    messageId,
    type: "text",
    text,
    synthetic,
    time: {
      start: Date.now(),
      end: null
    }
  };
}

/**
 * Create a Reasoning part (for models with extended thinking)
 * @param {Object} options
 * @param {string} options.sessionId
 * @param {string} options.messageId
 * @param {string} options.text
 * @returns {Object} ReasoningPart
 */
export function createReasoningPart({ sessionId, messageId, text }) {
  return {
    id: generateId(),
    sessionId,
    messageId,
    type: "reasoning",
    text,
    time: {
      start: Date.now(),
      end: null
    }
  };
}

// ==================== Tool Part and States ====================

/**
 * Tool state: pending (waiting to execute)
 * @param {Object} input - Tool input parameters
 * @param {string} raw - Raw input string from LLM
 * @returns {Object} ToolStatePending
 */
export function toolStatePending(input, raw = "") {
  return {
    status: "pending",
    input,
    raw
  };
}

/**
 * Tool state: running (currently executing)
 * @param {Object} input - Tool input parameters
 * @param {string} [title] - Execution title
 * @returns {Object} ToolStateRunning
 */
export function toolStateRunning(input, title = null) {
  return {
    status: "running",
    input,
    title,
    metadata: {},
    time: {
      start: Date.now()
    }
  };
}

/**
 * Tool state: completed (finished successfully)
 * @param {Object} options
 * @param {Object} options.input - Tool input parameters
 * @param {string} options.output - Tool output
 * @param {string} options.title - Result title
 * @param {Object} [options.metadata] - Additional metadata
 * @param {number} options.startTime - When execution started
 * @returns {Object} ToolStateCompleted
 */
export function toolStateCompleted({ input, output, title, metadata = {}, startTime }) {
  return {
    status: "completed",
    input,
    output,
    title,
    metadata,
    time: {
      start: startTime,
      end: Date.now()
    }
  };
}

/**
 * Tool state: error (failed)
 * @param {Object} options
 * @param {Object} options.input - Tool input parameters
 * @param {string} options.error - Error message
 * @param {number} options.startTime - When execution started
 * @returns {Object} ToolStateError
 */
export function toolStateError({ input, error, startTime }) {
  return {
    status: "error",
    input,
    error,
    metadata: {},
    time: {
      start: startTime,
      end: Date.now()
    }
  };
}

/**
 * Create a Tool part
 * @param {Object} options
 * @param {string} options.sessionId
 * @param {string} options.messageId
 * @param {string} options.callId - Unique tool call ID
 * @param {string} options.tool - Tool name
 * @param {Object} options.state - Tool state (pending/running/completed/error)
 * @returns {Object} ToolPart
 */
export function createToolPart({ sessionId, messageId, callId, tool, state }) {
  return {
    id: generateId(),
    sessionId,
    messageId,
    type: "tool",
    callId,
    tool,
    state,
    metadata: {}
  };
}

/**
 * Update tool part state
 * @param {Object} toolPart - Existing tool part
 * @param {Object} newState - New state
 * @returns {Object} Updated tool part
 */
export function updateToolPartState(toolPart, newState) {
  return {
    ...toolPart,
    state: newState
  };
}

// ==================== Step Parts ====================

/**
 * Create a Step Start part (marks beginning of an agentic step)
 * @param {Object} options
 * @param {string} options.sessionId
 * @param {string} options.messageId
 * @returns {Object} StepStartPart
 */
export function createStepStartPart({ sessionId, messageId }) {
  return {
    id: generateId(),
    sessionId,
    messageId,
    type: "step-start"
  };
}

/**
 * Create a Step Finish part (marks end of an agentic step)
 * @param {Object} options
 * @param {string} options.sessionId
 * @param {string} options.messageId
 * @param {string} options.reason - Why the step finished (e.g., "end_turn", "tool_use")
 * @param {Object} options.tokens - Token usage for this step
 * @param {number} options.cost - Cost for this step
 * @returns {Object} StepFinishPart
 */
export function createStepFinishPart({ sessionId, messageId, reason, tokens, cost }) {
  return {
    id: generateId(),
    sessionId,
    messageId,
    type: "step-finish",
    reason,
    cost,
    tokens
  };
}

// ==================== Message with Parts ====================

/**
 * Create a message with its parts
 * @param {Object} info - Message info (User or Assistant)
 * @param {Array} parts - Array of parts
 * @returns {Object} MessageWithParts
 */
export function createMessageWithParts(info, parts = []) {
  return {
    info,
    parts
  };
}

/**
 * Add a part to a message
 * @param {Object} messageWithParts
 * @param {Object} part
 * @returns {Object} Updated message with new part
 */
export function addPart(messageWithParts, part) {
  return {
    ...messageWithParts,
    parts: [...messageWithParts.parts, part]
  };
}

/**
 * Update a part in a message (by part ID)
 * @param {Object} messageWithParts
 * @param {string} partId
 * @param {Object} updates
 * @returns {Object} Updated message
 */
export function updatePart(messageWithParts, partId, updates) {
  return {
    ...messageWithParts,
    parts: messageWithParts.parts.map(p =>
      p.id === partId ? { ...p, ...updates } : p
    )
  };
}

// ==================== Conversation ====================

/**
 * Create a new conversation/session
 * @param {Object} options
 * @param {string} [options.id] - Session ID (auto-generated if not provided)
 * @returns {Object} Conversation
 */
export function createConversation({ id } = {}) {
  return {
    id: id || generateId(),
    messages: [],
    created: Date.now()
  };
}

/**
 * Add a message to a conversation
 * @param {Object} conversation
 * @param {Object} messageWithParts
 * @returns {Object} Updated conversation
 */
export function addMessage(conversation, messageWithParts) {
  return {
    ...conversation,
    messages: [...conversation.messages, messageWithParts]
  };
}

/**
 * Get the last assistant message from a conversation
 * @param {Object} conversation
 * @returns {Object|null} Last assistant message or null
 */
export function getLastAssistantMessage(conversation) {
  for (let i = conversation.messages.length - 1; i >= 0; i--) {
    if (conversation.messages[i].info.role === "assistant") {
      return conversation.messages[i];
    }
  }
  return null;
}

// ==================== Type Guards (for runtime checking) ====================

export function isUserMessage(msg) {
  return msg?.role === "user";
}

export function isAssistantMessage(msg) {
  return msg?.role === "assistant";
}

export function isTextPart(part) {
  return part?.type === "text";
}

export function isToolPart(part) {
  return part?.type === "tool";
}

export function isReasoningPart(part) {
  return part?.type === "reasoning";
}

export function isStepStartPart(part) {
  return part?.type === "step-start";
}

export function isStepFinishPart(part) {
  return part?.type === "step-finish";
}

export function isToolCompleted(toolPart) {
  return toolPart?.state?.status === "completed";
}

export function isToolError(toolPart) {
  return toolPart?.state?.status === "error";
}

export function isToolPending(toolPart) {
  return toolPart?.state?.status === "pending";
}

export function isToolRunning(toolPart) {
  return toolPart?.state?.status === "running";
}
