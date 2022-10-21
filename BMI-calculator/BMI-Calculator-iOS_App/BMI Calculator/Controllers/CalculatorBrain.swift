import Foundation
import UIKit


struct CalculatorBrain {
    var bmi: BMI?
    
    mutating func calcBMI(_ height: Float, _ weight: Float){
        let bmiValue = weight/(pow(height, 2))
        switch bmiValue{
        case (0..<18.5) :
            bmi = BMI(value: bmiValue, advise: "Eat more pies!", color: UIColor.systemBlue)
            break
            
        case (18.5...24.9):
            bmi = BMI(value: bmiValue, advise: "Fit as a Fiddle!", color: UIColor.systemGreen)
            break
            
        default:
            bmi = BMI(value: bmiValue, advise: "Eat less pies!", color: UIColor.systemRed)
            
        }
    }
    
    func getBmiVal() -> String{
        return String(format: "%0.1f", bmi?.value ?? "0.0")
    }
    
    func getAdvise() -> String{
        return bmi?.advise ?? "It's fine"
    }
    
    func getColour() -> UIColor{
        return bmi?.color ?? UIColor.cyan
    }
    
}
