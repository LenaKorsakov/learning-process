const minScore = function(n, roads) {
    const graph = new Array(n + 1).fill().map(() => []);
    //const graph2 = new Array(n + 1).fill([]);// этот вариант и вариант выше не равнозначны - здесь создастся массив из одного массива(ссылки на один и тот же массив)
    //https://stackoverflow.com/questions/56704826/difference-between-fill-and-fill-map
    const used = new Set();

    for (const [v1, v2, distance] of roads) {
        graph[v1].push([v2, distance]);
        graph[v2].push([v1, distance]);
    }

    const queue = [1];
    used.add(1);
    let ans = Infinity;

    while (queue.length) {
        const node = queue.shift();

        for (const [next, distance] of graph[node]) {
            ans = Math.min(ans, distance);

            if(used.has(next)) {
                continue;
            }

            used.add(next);
            queue.push(next);
        }
    }

    return ans; 
};

const n = 4;
const roads = [[1,2,9],[2,3,6],[2,4,5],[1,4,7]];
minScore(n, roads);

// We are given an undirected graph with n nodes which are referred to as cities from 1 to n. The graph has weighted edges referred to as roads in the description.
// The score of a path between two nodes is defined as the minimum weight edge in this path.
// Our task is to return the minimum possible score of a path from 1 to n. It is also given that we can visit any edge or node multiple times in a path.