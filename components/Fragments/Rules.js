import React from "react";

function Rules() {
  return (
    <div className="px-10 py-6">
      <div className="mt-7 border-b pb-6">
        <h1 className="text-2xl font-semibold">
          Rules & regulations <span className="font-light">for the event</span>
        </h1>
        <p className="text-sm text-neutral-500 mt-3">
          API abuse, plagiarism, and any other form of cheating is strictly
          prohibited. Please read the rules carefully before proceeding.
        </p>
      </div>
      <ul className="list-disc pl-4 mt-10 text-sm space-y-4 leading-8 max-w-4xl">
        <li>Login using your team id</li>
        <li>
          After successfully entering their session details, participants will
          be directed to the dashboard.
        </li>
        <li>
          Upon reaching the dashboard, participants will encounter the problem
          statement, based on their arena.
        </li>
        <li>
          Konnexweb & Kognizance participants are required to regularly push
          their work to their individual GitHub repositories at an interval of 2
          hours.
        </li>
        <li>
          Participants will have access to their work within the dashboard until
          12 PM, marking the conclusion of Phase 1.
        </li>
        <li>
          Phase 1 can be submited only once. No further submissions will be
          accepted after the deadline.
        </li>
        <li>Participants will have a break from 2:00 PM to 3:00 PM.</li>
        <li>
          Participants are informed that Phase 2 will begin promptly at 4:00 PM
          and conclude at 6:00 PM.
        </li>
        <li>
          Please note: Attendance is mandatory for all participants in both
          Phase 1 (until 12 PM) and Phase 2 (from 4 PM to 6 PM).
        </li>
        <li>
          Discourage and condemn API abuse practices such as excessive requests,
          data scraping beyond allowed limits, or unauthorized access attempts.
        </li>
      </ul>
    </div>
  );
}

export default Rules;
