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
        team: {
          name: team.name,
          arena: team.arena,
          gmail: team.gmail,
          members: team.members,
        },
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

export const AuthenticateTeam = async (id) => {
  console.log("id", id);
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
        team: {
          name: team.name,
          arena: team.arena,
          gmail: team.gmail,
          id: team.pid,
        },
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
