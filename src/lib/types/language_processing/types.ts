export enum MessageType {
  REQUEST_RECEIVED = "REQUEST_RECEIVED",
  REQUEST_PROCESSED = "REQUEST_PROCESSED"
}

enum Processor {
  DECYPHR = "Decyphr",
  AWS = "AWS Comprehend"
}

enum Language {
  EN = "English"
}

enum Mood {
  NEGATIVE = "Negative",
  NEUTRAL = "Neutral",
  POSITIVE = "Positive"
}

enum Bias {
  SUBJECTIVE = "Subjective",
  OBJECTIVE = "Objective"
}

interface ProcessRequest {
  processor: Processor
  language_code: Language
  client_id: string
}

export interface SocketUpdateMessage {
  message_type: MessageType
  process_request_tokens: ProcessedMessage
}

export interface Token {
  text: string
  tag: string
  display_name: string
}

interface Assessment {
  tokens: string[]
  mood: Mood
  bias: Bias
}

interface Analysis {
  text: string
  mood: Mood
  bias: Bias
  assessment: Assessment[]
}

export interface ProcessedMessage {
  id: number,
  procesRequest: ProcessRequest
  tokens: Token[]
  analysis: Analysis
  request_uuid: string
}

export interface ReceivedMessage {
  message_type: MessageType
}

export interface Request {
  received: boolean
  processed: boolean
  message: ProcessedMessage | null
  requestUuid: string;
}
