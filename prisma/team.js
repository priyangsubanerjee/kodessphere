import prisma from "./prisma";

export const GetTeam = async (id) => {
  try {
    let team = await prisma.team.findUnique({
      where: {
        pid: id,
      },
    });

    if (team) {
      return {
        success: true,
        message: "Team present in database",
      };
    } else {
      return {
        success: false,
        message: "Team not present in database",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Error occurred",
    };
  }
};
