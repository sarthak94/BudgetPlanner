
import java.util.ArrayList;
import java.util.Arrays;

public class Recc {
	public static void RecPermute(String sofar, String rest) {
		if (rest.equals("")) {
			System.out.println(sofar + "");
		} else {

			for (int i = 0; i < rest.length(); i++) {
				String next = sofar + rest.substring(i, i + 1);
				String rem = rest.substring(0, i) + rest.substring(i + 1);

				RecPermute(next, rem);

			}
		}
	}



	public static void sum_up_recursive(ArrayList<Integer> numbers, int target,
										ArrayList<Integer> partial) {
		int s = 0;
		for (int x : partial) { //if x is in partial, add it to s
			s += x;
		}
		if (s == target) //if s is equal to target sum
			System.out.println("sum(" + Arrays.toString(partial.toArray()) + ")=" +
							   target);  //print the list of integers in partial
		if (s >= target) //if s is greater than target, end
			return;
		for (int i = 0; i < numbers.size(); i++) {
			ArrayList<Integer> remaining = new ArrayList<Integer>();
			int n = numbers.get(i);
			for (int j = i + 1; j < numbers.size(); j++) remaining.add(numbers.get(j));
			ArrayList<Integer> partial_rec = new ArrayList<Integer>(partial);

			partial_rec.add(n);
			sum_up_recursive(remaining, target, partial_rec);
		}
	}






	public static void sum_up(ArrayList<Integer> numbers, int target) {
		sum_up_recursive(numbers, target, new ArrayList<Integer>());
	}



	public static void main(String[] args) {
		// RecPermute("", "abcd");

		Integer[] numbers = {1, 3, 2, 4, 5, 6, 7, 8, 9};
		int target = 17;
		sum_up(new ArrayList<Integer>(Arrays.asList(numbers)), target);
		// generate_combinations(1, 2, 3, 4, 5, 6, 7, 8);

	}






	public static void generate_combinations(int a1, int a2, int a3, int a4, int c1,
			int c2, int c3, int c4) {
		if (a1 + a2 + a3 + a4 == 12)
			System.out.println(a1 + " " + a2 + " " + a3 + " " + a4);
		else {
			if (c1 > 0) {
				generate_combinations(a1 + 1, a2, a3, a4, c1 - 1, c2, c3, c4);
			}
			if (c2 > 0) {
				generate_combinations(a1, a2 + 1, a3, a4, c1, c2 - 1, c3, c4);
			}
			if (c3 > 0) {
				generate_combinations(a1, a2, a3 + 1, a4, c1, c2, c3 - 1, c4);
			}

			if (c4 > 0) {
				generate_combinations(a1, a2, a3, a4 + 1, c1, c2, c3, c4 - 1);

			}
		}
		System.out.println("done");

	}
}