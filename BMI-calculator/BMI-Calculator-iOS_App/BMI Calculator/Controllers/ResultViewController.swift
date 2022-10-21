import UIKit

class ResultViewController: UIViewController {

    @IBOutlet weak var BMIlabel: UILabel!
    
    @IBOutlet weak var adviseLabel: UILabel!
        
    var bmiValue: String?
    var advice: String?
    var color: UIColor?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        BMIlabel.text = bmiValue
        adviseLabel.text = advice
        view.backgroundColor = color
        
    }
    
    @IBAction func recalculatePressed(_ sender: UIButton) {
        self.dismiss(animated: true)
    }

}
