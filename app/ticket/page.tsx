"use client"

import { useQRCode } from 'next-qrcode';
import { useSearchParams } from 'next/navigation'

export default function Ticket(){
    const { Canvas } = useQRCode();
    const searchParams = useSearchParams()
    const ticketId = searchParams.get('ticketId')
    return(
        <>
        <Canvas
            text={ticketId!}
            options={{
            errorCorrectionLevel: 'M',
            margin: 3,
            scale: 4,
            width: 200,
            color: {
                dark: '#000',
                light: '#fff',
            },
      }}
    />
        </>
    )
}