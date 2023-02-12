const statusCodes = require('../constants/statusCodes')

const formatResponse = (statusCode, success, message = '', payload = {}) => {
  return {
    success,
    statusCode,
    message,
    ...payload,
  }
}

const createResponse = (response) => {
  if (
    typeof response.error !== 'undefined' &&
    typeof response.error.details !== 'undefined' &&
    Array.isArray(response.error.details)
  ) {
    return {
      success: false,
      statusCode: statusCodes.badRequest,
      message: response.error.details[0].message,
    }
  } else if (typeof response.statusCode !== 'undefined') {
    return response
  }
}


module.exports = {
  formatResponse,
  createResponse,
}
