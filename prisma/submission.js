import prisma from "./prisma";

export async function getSubmission() {
  try {
    const submissions = await prisma.sub1.findMany();
    return {
      success: true,
      message: "Submissions fetched successfully",
      data: submissions,
    };
  } catch (error) {
    return {
      success: false,
      message: "Error in getting submissions",
    };
  }
}

export async function createSubmission({ teamName, teamPid, content, arena }) {
  try {
    const createSubmission = await prisma.sub1.create({
      data: {
        teamName: teamName,
        teamPid: teamPid,
        content: content,
        arena: arena,
      },
    });
    return {
      success: true,
      message: "Submission Registered Successfully",
      pid: teamPid,
    };
  } catch (error) {
    return {
      success: true,
      message: "Team Registered Successfully",
      pid: teamPid,
    };
  }
}
