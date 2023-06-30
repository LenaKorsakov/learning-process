function solve(clawPos, boxes, boxInClaw) {
  const stacksAmount = boxes.length;
  const goalAmount = boxes.reduce((a, b) => a + b) / stacksAmount;

  const ifLessThanGoalStackOnRight = (pos) => {
    if (pos < stacksAmount) {
      for (let i = pos + 1; i < stacksAmount; i++) {
        if (boxes[i] < goalAmount) {
          return true;
        }
      }
    }
    return false;
  };

  const ifMoreThanGoalStackOnLeft = (pos) => {
    if (pos > 0) {
      for (let i = pos - 1; i >= 0; i--) {
        if (boxes[i] > goalAmount) {
          return true;
        }
      }
    }
    return false;
  };

  const ifMoreThanGoalStackOnRight = (pos) => {
    if (pos < stacksAmount) {
      for (let i = pos + 1; i < stacksAmount; i++) {
        if (boxes[i] > goalAmount) {
          return true;
        }
      }
    }
    return false;
  };

  const ifLessThanGoalStackOnLeft = (pos) => {
    if (pos > 0) {
      for (let i = pos - 1; i >= 0; i--) {
        if (boxes[i] < goalAmount) {
          return true;
        }
      }
    }
    return false;
  };

  if (boxInClaw) {
    if (boxes[clawPos] < goalAmount) {
      return 'PLACE';
    } else if (ifLessThanGoalStackOnRight(clawPos)) {
      return 'RIGHT';
    } else if (ifLessThanGoalStackOnLeft(clawPos)) {
      return 'LEFT';
    }
  } else {
    if (boxes[clawPos] > goalAmount) {
      return 'PICK';
    } else if (ifMoreThanGoalStackOnRight(clawPos)) {
      return 'RIGHT';
    } else if (ifMoreThanGoalStackOnLeft(clawPos)) {
      return 'LEFT';
    }
  }
}

solve(0, [3, 1, 2, 2], false);
