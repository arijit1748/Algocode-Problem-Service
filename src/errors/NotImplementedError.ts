import { StatusCodes } from 'http-status-codes';

import BaseError from './BaseError';

class NotImplementedError extends BaseError {
    constructor(methodName: string) {
        super('Method is Not Implemented', StatusCodes.NOT_IMPLEMENTED, `${methodName} method is not implemented`, {});
    }
}

export default NotImplementedError;