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
