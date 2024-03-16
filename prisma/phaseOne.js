import prisma from "./prisma";

export const SubmitPhaseOne = async (id, name, arena, gmail, content) => {
  try {
    await prisma.phaseOne.create({
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
      message: "Phase 1 submission successful",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Submission failed. Duplicate submission.",
    };
  }
};
