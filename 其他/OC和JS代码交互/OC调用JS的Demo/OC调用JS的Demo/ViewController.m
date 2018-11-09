//
//  ViewController.m
//  OC调用JS的Demo
//
//  Created by 王泽 on 2017/8/7.
//  Copyright © 2017年 Huashankeji. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()<UIWebViewDelegate>

@property(nonatomic, strong) UIWebView *webView;

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    _webView = [[UIWebView alloc] initWithFrame:self.view.bounds];
    _webView.delegate = self;
    [self.view addSubview:_webView];
    
    
    [_webView loadRequest:[NSURLRequest requestWithURL:[[NSBundle mainBundle] URLForResource:@"index" withExtension:@"html"]]];
    
}


-(void)ocMethod
{
    NSLog(@"==============");
}

#pragma --mark UIWebViewDelegate
//OC调用JS的回调方法
- (void)webViewDidFinishLoad:(UIWebView *)webView
{
    //现在OC已经可以调到js里面自带的方法了
//    [webView stringByEvaluatingJavaScriptFromString:@"alert(88888)"];
    
    //现在OC已经可以调到js里面自定义的方法了
//    NSString *str = [webView stringByEvaluatingJavaScriptFromString:@"jsMethod()"];
//    NSLog(@"++++%@+++++", str);
    
}

//JS调用OC要用到的方法
- (BOOL)webView:(UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)navigationType
{
    NSString *urlStr = request.URL.absoluteString;
    NSString *preStr = @"hs://";
    
    if ([urlStr hasPrefix:preStr])
    {
        NSString *methodStr = [urlStr substringFromIndex:preStr.length];
        NSLog(@"%@", methodStr);
        
        [self performSelector:NSSelectorFromString(methodStr) withObject:nil];
        
        return NO;
    }

    
    
    return YES;
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
