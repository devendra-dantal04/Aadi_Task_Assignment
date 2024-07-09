import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import React, { useEffect, useState } from "react";

function Dashboard({ user }) {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    window.FB.api(`/${user.userId}/accounts`, function (response) {
      setPages(response.data);
    });
  }, [user]);

  return (
    <div className="w-full max-w-[1200px] min-h-[100vh] flex flex-col items-center">
      <div className="w-full flex items-center flex-col mt-4">
        <img
          src={user.profile_pic}
          alt="profile picture"
          className="h-[45px] w-[45px] rounded-full"
        />
        <p className="text-xl font-semibold mt-2">{user.name}</p>
      </div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Page" />
        </SelectTrigger>
        <SelectContent>
          {pages.map((page) => (
            <SelectItem value={page}>{page.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default Dashboard;
