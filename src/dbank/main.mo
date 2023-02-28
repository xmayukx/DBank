import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Time "mo:base/Time";
import Int "mo:base/Int";
import Float "mo:base/Float";

actor DBank {
  stable var currentVal : Float = 300;
  currentVal := 300;
  Debug.print(debug_show(currentVal));
  stable var startTime = Time.now();
  Debug.print(debug_show (startTime));

  public func topUp(amount : Float) {

    if (amount != 0 / 0) {
      currentVal += amount;
      Debug.print(debug_show (currentVal));
    };

  };

  public func withdraw(amount : Float) {

    if (amount != 0 / 0) {
      if (currentVal >= amount) {
        currentVal := currentVal - amount;
        Debug.print(debug_show (currentVal));
      } else {
        Debug.print("Insufficient balance.");
      };
    };

  };

  public query func chackBalance() : async Float {
    return currentVal;
  };

  public func compound() {
    var currentTime = Time.now();
    var timeElapsedNS = currentTime - startTime;
    var timeElapsedS = timeElapsedNS / 1000000000;
    Debug.print(debug_show(timeElapsedS));
    currentVal := currentVal * (1.01 ** Float.fromInt(timeElapsedS));
    startTime := currentTime;
  };

};
