/**
 * Lopecode Opencode Port
 *
 * Browser-based agentic loop for AI-assisted notebook development.
 * Ported from opencode (https://github.com/anthropics/opencode).
 */

// Message types
export {
  // ID generation
  generateId,

  // Message creators
  createUserMessage,
  createAssistantMessage,
  completeAssistantMessage,

  // Part creators
  createTextPart,
  createReasoningPart,
  createToolPart,
  createStepStartPart,
  createStepFinishPart,

  // Tool state creators
  toolStatePending,
  toolStateRunning,
  toolStateCompleted,
  toolStateError,

  // Part updates
  updateToolPartState,

  // Message with parts
  createMessageWithParts,
  addPart,
  updatePart,

  // Conversation
  createConversation,
  addMessage,
  getLastAssistantMessage,

  // Type guards
  isUserMessage,
  isAssistantMessage,
  isTextPart,
  isToolPart,
  isReasoningPart,
  isStepStartPart,
  isStepFinishPart,
  isToolCompleted,
  isToolError,
  isToolPending,
  isToolRunning
} from './message.js';
