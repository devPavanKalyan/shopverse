package com.accolite.assignment;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.PriorityQueue;

public class FestivalLineup {
    public static List<String> findPerformanceOrder(List<List<String>> performance) {
        Map<String, PriorityQueue<String>> adj = new HashMap<>();
        for (List<String> pair : performance) {
            String from = pair.get(0);
            String to = pair.get(1);
            adj.putIfAbsent(from, new PriorityQueue<>());
            adj.get(from).add(to);
        }

        List<String> result = new ArrayList<>();
        String starter = "starter";
        dfs(starter, adj, result);
        Collections.reverse(result);
        return result;
    }

    private static void dfs(String current, Map<String, PriorityQueue<String>> adj, List<String> result) {
        PriorityQueue<String> neighbors = adj.getOrDefault(current, new PriorityQueue<>());
        while (!neighbors.isEmpty()) {
            String next = neighbors.poll();
            dfs(next, adj, result);
        }
        result.add(current);
    }
}

class UserTest {

    @Test
    public void test1() {
        List<List<String>> performance = new ArrayList<>();
        performance.add(Arrays.asList("starter", "zeal"));
        performance.add(Arrays.asList("zeal", "starter"));
        performance.add(Arrays.asList("starter", "beats"));
        performance.add(Arrays.asList("beats", "starter"));

        List<String> expected = Arrays.asList("starter", "beats", "starter", "zeal");
        List<String> actual = FestivalLineup.findPerformanceOrder(performance);

        assertEquals(expected, actual);
    }

}
