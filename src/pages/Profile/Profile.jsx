import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import React, { useState } from "react";
import QRCode from "react-qr-code";

const Profile = () => {
  const [qrValue, setQrValue] = useState("");
  const [visible, setVisible] = useState(false);
  const handleQrCode = () => {
    console.log("clicked");
    setVisible(!visible);
    setQrValue("http://localhost:5173");
  };
  return (
    <div>
      <h2 className="my-10 text-center">Profile</h2>
      <Button className="flex mx-auto mb-10" onClick={handleQrCode}>
        Generate QR Code
      </Button>
      {visible && (
        <Card className="w-1/2 mx-auto">
          <CardContent>
            <QRCode value={qrValue} className="flex mx-auto mt-10" />
            <CardDescription className="text-center mt-5">
              {qrValue}
            </CardDescription>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Profile;
