import UIKit

class CalculateViewController: UIViewController {

    var calcBrain = CalculatorBrain() 

    @IBOutlet weak var heightValue: UILabel!
    
    @IBOutlet weak var weightValue: UILabel!
    
    @IBOutlet weak var userHeight: UISlider!
    
    @IBOutlet weak var userWeight: UISlider!
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }
    
    @IBAction func heightSlider(_ sender: UISlider) {
        heightValue.text = String(format: "%.2fm", sender.value)
    }
    
    @IBAction func weightSlider(_ sender: UISlider) {
        weightValue.text = String(Int(sender.value)) + "Kg"

    }

    @IBAction func CalculateBMI(_ sender: Any) {
        let height = userHeight.value
        let weight = userWeight.value

        calcBrain.calcBMI(height, weight)
        
        self.performSegue(withIdentifier: "goToResult", sender: self)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if(segue.identifier == "goToResult") {
            let destinationVC = segue.destination as! ResultViewController
            
            destinationVC.bmiValue = calcBrain.getBmiVal() //we cannot directly attach label.text to the string here
            destinationVC.advice = calcBrain.getAdvise() //therefore we need to create separate variables in resultview
            destinationVC.color = calcBrain.getColour() //to address this issue
        }
    }
    
}

