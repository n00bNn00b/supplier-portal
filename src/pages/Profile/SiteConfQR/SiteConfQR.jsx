import { Card, CardContent, CardDescription } from "@/components/ui/card";
import React from "react";
import QRCode from "react-qr-code";

const SiteConfQR = () => {
  const supabaseURL = "https://rgnabwbajaqojnodytdw.supabase.co";
  const supabaseAnonKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnbmFid2JhamFxb2pub2R5dGR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU3NjYzMTQsImV4cCI6MjAyMTM0MjMxNH0.Zcyux_yEeNQ3s4n1VWn94OMKgJEL6rJKM5PvnzqRNM4";
  const siteConfValue =
    "supabaseURI=" + supabaseURL + "&supabaseAnonKey=" + supabaseAnonKey;
  return (
    <Card className="mx-3 px-3">
      <CardContent className="w-96 mx-auto ">
        <h2 className="text-center font-bold text-2xl">Site QR Code</h2>
        <QRCode
          value={siteConfValue}
          className="text-center mt-5 overflow-hidden"
        />
        <CardDescription className="text-center mt-5 overflow-hidden">
          {siteConfValue}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default SiteConfQR;
