#include <iostream>

using namespace std;

int main() {
	int T, M;
	int TT[12001];
	int VV[12001];
	int f[12000] = {0};

	cin >> T >> M;

	for (int i = 0; i < M; i++) {
		int a, b;
		cin >> a >> b;
		TT[i] = a;
		VV[i] = b;
	}

	for (int i = 0; i < M; i++) {
		for (int j = TT[i]; j <= T; j++) {
			if (f[j - TT[i]] + VV[i] > f[j]) {
				f[j] = f[j - TT[i]] + VV[i];
			}
		}
	}

	cout << f[T] << endl;
}