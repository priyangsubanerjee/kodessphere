import prisma from "./prisma";

export const SubmitPhaseTwo = async (id, name, arena, gmail, content) => {
  try {
    await prisma.phaseTwo.create({
      data: {
        teamPid: id,
        teamName: name,
        arena: arena,
        gmail: gmail,
        content: content,
      },
    });

    return {
      success: true,
      message: "Phase 2 submission successful",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Submission failed. Duplicate submission.",
    };
  }
};

export const GetPhaseTwoSubmissions = async (arena) => {
  try {
    const phaseTwo = await prisma.phaseTwo.findMany({
      where: {
        arena: arena,
      },
    });

    return {
      success: true,
      data: phaseTwo,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Failed to fetch phase one data",
    };
  }
};
