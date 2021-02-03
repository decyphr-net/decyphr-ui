export default class ClassError extends Error {

  data: any;
  code: number;

  constructor(message = 'Something went wrong', data = '', code = 0) {
    super();
    this.message = message;
    this.data = data;
    this.code = code;
  }
}
