//
//  MyOCViewController.m
//  SubApp
//
//  Created by 付金亮 on 2018/11/28.
//  Copyright © 2018 付金亮. All rights reserved.
//
#import "MyOCViewController.h"
#import "SubApp-Swift.h"
@interface MyOCViewController ()

@end

@implementation MyOCViewController
- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
    UIButton *btn = [[UIButton alloc]initWithFrame:CGRectMake(40, 40, 60, 40)];
    [btn setTitle:@"点击" forState:UIControlStateNormal];
    [btn addTarget:self action:@selector(click:) forControlEvents:UIControlEventTouchUpInside];
    [btn setTitleColor:[UIColor blueColor] forState:UIControlStateNormal];
    self.view.backgroundColor = [UIColor whiteColor];
    [self.view addSubview:btn];
}
-(void)click:(UIButton *)sender {
    MySwiftViewController *vc = [[MySwiftViewController alloc]initWithNibName:@"MySwiftViewController" bundle:nil];
    [self presentViewController:vc animated:YES completion:nil];
}
/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
