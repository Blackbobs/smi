import {NextResponse} from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const user = 'ayodeji'

    if(!user){
        return NextResponse.redirect(
            new URL('/auth/login', request.url)
        )
    }
    return NextResponse.next()
}

export const config = {
    matcher: '/admin',
}