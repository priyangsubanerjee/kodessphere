import prisma from "./prisma";

export const CheckPhaseOneAllowed = async () => {
  let ph1 = await prisma.permission.findMany({
    where: {
      name: "PHASE_ONE",
    },
  });
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

export const CheckEventStarted = async () => {
  let event = await prisma.permission.findMany({
    where: {
      name: "EV_STARTED",
    },
  });
  if (event.length == 0) {
    return {
      success: false,
      message: "Event not found",
      value: false,
    };
  } else {
    return {
      success: true,
      message: "Event fetched successfully",
      value: event[0].value,
    };
  }
};

export const checkMLAllowed = async () => {
  let ml = await prisma.permission.findMany({
    where: {
      name: "ML_SUB",
    },
  });
  if (ml.length == 0) {
    return {
      success: false,
      message: "Permission not found",
      value: false,
    };
  } else {
    return {
      success: true,
      message: "Permission fetched successfully",
      value: ml[0].value,
    };
  }
};
