import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import React from "react";
import QRCode from "react-qr-code";

const ProfileQRCode = ({ handleQrCode, visible, setVisible, qrValue }) => {
  return (
    <Card>
      {!visible && (
        <Button className="flex mx-auto mt-2 mb-10" onClick={handleQrCode}>
          Generate QR Code
        </Button>
      )}
      {visible && (
        <CardContent className="w-fit mx-auto grid grid-cols-1">
          <QRCode value={qrValue} className="flex mx-auto mt-10" />

          <CardDescription className="text-center mt-5 overflow-hidden">
            {qrValue}
          </CardDescription>
        </CardContent>
      )}
    </Card>
  );
};

export default ProfileQRCode;
