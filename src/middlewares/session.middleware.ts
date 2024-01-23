import { Middleware } from '@/modules/app'
import { Injectable } from '@/modules/common'
import type { Response, Request, NextFunction } from 'express'
import session from 'express-session'
@Injectable()
export class SessionMiddleware implements Middleware {
    async use(_request: Request, response: Response, next: NextFunction) {
        try {
            const sessionId = String(_request.headers["sessionid"]) || null
            if (!sessionId || sessionId === "null" || sessionId === "undefined") {
                return response.json({ message: "Session Id is missing", result: null, success: false })
            }

            const session: Partial<session.SessionData> | undefined = await new Promise((resolve, reject) => {
                _request.sessionStore.get(sessionId, (err, session) => {

                    if (err) reject(err)
                    if (session) resolve(session)
                    if (typeof session === "undefined") resolve(session)
                })
            })

            if (typeof session === "undefined") {
                return response.json({ message: "Invalid Session", result: null, success: false })
            }
            if (!session.hasOwnProperty(sessionId)) {
                return response.json({ message: "Invalid Session", result: null, success: false })
            }
            next()
        } catch (error: any) {
            return response.json({ message: error.message, result: null, success: false })
        }
    }
    
}