// import QRCode from 'qrcode';
// import { v4 as uuidv4 } from 'uuid';
// import { connectToDatabase } from '@/lib/mongodb';

// export default async function generateQRCode(userId: string) {
//   // Kullanıcı için benzersiz bir QR ID oluştur
//   const qrId = uuidv4();

//   // QR kodu bir URL olarak oluştur
//   const qrData = `https://yourdomain.com/qr/${qrId}`;
//   const qrCodeImage = await QRCode.toDataURL(qrData); // QR görseli üret

//   // Database'e kaydet (MongoDB)
//   const db = await connectToDatabase();
//   await db.collection('qrcodes').insertOne({
//     userId,
//     qrId,
//     qrData,
//     qrImage: qrCodeImage, // QR kodunun base64 hali
//     createdAt: new Date()
//   });

//   return { qrId, qrCodeImage };
// }

import React from 'react';

const generateQrCode = () => {
  return <div>generateQrCode</div>;
};

export default generateQrCode;
