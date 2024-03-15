import { useSession } from "next-auth/react";
import React from "react";

function Members() {
  const session = useSession();
  return (
    <div className="px-10 py-6">
      <div className="mt-7">
        <h1 className="text-2xl font-semibold">
          Team <span className="font-light">members</span>
        </h1>
        <p className="text-sm text-neutral-600 mt-3">
          Please make sure verify members data before submitting.
        </p>
        <div className="whitespace-nowrap overflow-x-auto">
          <table className="w-fit lg:w-full text-left mt-6 lg:mt-10">
            <thead>
              <tr>
                <th className="font-medium px-5 py-4 text-sm"></th>
                <th className="font-medium px-5 py-4 text-sm">Name</th>
                <th className="font-medium px-5 py-4 text-sm">Roll no.</th>
                <th className="font-medium px-5 py-4 text-sm">Email</th>
                <th className="font-medium px-5 py-4 text-sm">Phone</th>
              </tr>
            </thead>
            <tbody>
              {session?.data?.user?.members.map((member, i) => (
                <tr key={i} className="border-b">
                  <td className="font-normal px-5 py-5 text-sm">{i + 1}</td>
                  <td className="font-normal px-5 py-5 text-sm flex items-center space-x-4">
                    {member.name}
                  </td>
                  <td className="font-normal px-5 py-5 text-sm">
                    {member.roll}
                  </td>
                  <td className="font-normal px-5 py-5 text-sm">
                    {member.email}
                  </td>
                  <td className="font-normal px-5 py-5 text-sm">
                    {member.phone}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-neutral-800 mt-16">
          Need to make changes?{" "}
          <a href="#" className="text-primary-500">
            Contact us
          </a>
        </p>
      </div>
    </div>
  );
}

export default Members;
