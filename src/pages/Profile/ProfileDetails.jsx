import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const ProfileDetails = ({ fullName, userEmail, userName, jobTitle }) => {
  return (
    <Card>
      <CardContent>
        <p>
          <span className="font-bold">Name:</span> {fullName}
        </p>
        <p>
          <span className="font-bold">Email:</span> {userEmail}
        </p>
        <p>
          <span className="font-bold">Username:</span> {userName}{" "}
        </p>
        <p>
          <span className="font-bold">Job Title:</span> {jobTitle}{" "}
        </p>
      </CardContent>
    </Card>
  );
};

export default ProfileDetails;
