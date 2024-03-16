import prisma from "./prisma";

export const CheckPhaseOneAllowed = async () => {
  let ph1 = await prisma.permission.findMany({
    where: {
      name: "PHASE_ONE",
    },
  });
  console.log(ph1[0]);
  if (ph1.length == 0) {
    return {
      success: false,
      message: "Permission not found",
      value: false,
    };
  } else {
    return {
      success: true,
      message: "Permission fetched successfully",
      value: ph1[0].value,
    };
  }
};

export const CheckPhaseTwoAllowed = async () => {
  let ph2 = await prisma.permission.findMany({
    where: {
      name: "PHASE_TWO",
    },
  });
  if (ph2.length == 0) {
    return {
      success: false,
      message: "Permission not found",
      value: false,
    };
  } else {
    return {
      success: true,
      message: "Permission fetched successfully",
      value: ph2[0].value,
    };
  }
};
