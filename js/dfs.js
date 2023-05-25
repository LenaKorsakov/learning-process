const canFinish = function(numCourses, prerequisites) {
    const prereqsPerCourse = new Array(numCourses).fill().map(() => []);

    for(const [v1, v2] of prerequisites) {
        prereqsPerCourse[v1].push(v2);
    }

    const visitedState = {
        unknown: 0,
        checkingPreReqs: 1,
        preReqMet: 2
    };

    const visitedStateByCourse = [];

    for(let course = 0; course < numCourses; course++) {
        visitedStateByCourse[course] = visitedState.unknown;
    }

    const isPreReqHierarchyValid = (course) => {
        const state = visitedStateByCourse[course];

        if (state === visitedState.checkingPreReqs) {
            return false;
        } else if (state === visitedState.preReqMet) {
            return true;
        } else if (state === visitedState.unknown) {

            visitedStateByCourse[course] = visitedState.checkingPreReqs;

            const preReqs = prereqsPerCourse[course];

            for (let i = 0; i < preReqs.length; i++) {
                const preReq = preReqs[i];
                const isPreReqValid = isPreReqHierarchyValid(preReq);

                if (!isPreReqValid) {
                    return false;
                }
            }
                visitedStateByCourse[course] = visitedState.preReqMet;
                return true;
        }
    }

    for (let course = 0; course < numCourses; course++) {
        const isValid = isPreReqHierarchyValid(course);
        if(!isValid) {
            return false;
        } 
    }
    return true;
};

canFinish(2, [[1,0],[0,1]]);

// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.