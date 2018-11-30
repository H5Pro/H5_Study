//
//  ViewController.m
//  MainApp
//
//  Created by 付金亮 on 2018/11/27.
//  Copyright © 2018 付金亮. All rights reserved.
//

#import "ViewController.h"
#import "MainApp-Swift.h"
@interface ViewController ()
- (IBAction)prevent:(id)sender;

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    
}

- (IBAction)prevent:(id)sender {
    MySwiftViewController *aa = [[MySwiftViewController alloc]init];
    [self presentViewController:aa animated:YES completion:nil];
}
@end
