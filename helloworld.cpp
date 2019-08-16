#include <iostream>

using namespace std;

int main() {
  int count;
  cin >> count;
  while (count--) {
    int num;
    cin >> num;
    int arr[30];
    int result[30];
    for (int i = 0; i < num; i++) {
      cin >> arr[i];
    }

    if (arr[0] > 0) {
      result[0] = 1;
    } else {
      result[0] = 0;
    }

    for (int i = 1; i < num; i++) {
      int count = 0;
      int m = 1;
      for (int j = i - 1; j >= 0; j--) {
        int sub = result[j+1] - result[j];
        count += m - sub;
        if (m > sub) {
          m = m - sub + 1;
        } else {
          break;
        }
        cout << m << sub;
      }
      result[i] = count;
    }
    for (int i = 0; i < num; i++) {
      cout << result[i];
      if (i != num - 1) {
        cout << ' ';
      } else {
        cout << endl;
      }
    }
  }
}