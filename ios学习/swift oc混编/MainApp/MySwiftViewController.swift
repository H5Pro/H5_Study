//
//  MySwiftViewController.swift
//  MainApp
//
//  Created by 付金亮 on 2018/11/27.
//  Copyright © 2018 付金亮. All rights reserved.
//

import UIKit
class MySwiftViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        let bb = MyOCViewController()
        bb.print()
        let aa = FirstSwiftViewController()
        aa.add()
        // Do any additional setup after loading the view.
    }
    
    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
