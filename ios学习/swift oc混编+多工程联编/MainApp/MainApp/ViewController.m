//
//  ViewController.m
//  MainApp
//
//  Created by 付金亮 on 2018/11/27.
//  Copyright © 2018 付金亮. All rights reserved.
//

#import "ViewController.h"
#import <SubApp/MyOCViewController.m>
@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
//    [self presentViewController:vc animated:YES completion:nil];
}


- (IBAction)prevent:(id)sender {
     MyOCViewController *vc = [[MyOCViewController alloc]init];
    [self presentViewController:vc animated:YES completion:nil];
}
@end
