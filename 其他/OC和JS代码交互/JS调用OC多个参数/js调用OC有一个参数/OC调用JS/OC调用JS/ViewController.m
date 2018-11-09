//
//  ViewController.m
//  OC调用JS
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

-(void)call:(NSString *)str
{
    NSLog(@"+++%s, %@+++", __func__, str);
}

#pragma --mark UIWebViewDelegate


//JS调用OC中的无参方法
- (BOOL)webView:(UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)navigationType
{
    NSString *urlString = request.URL.absoluteString;
    NSArray *strArr = [urlString componentsSeparatedByString:@"?"];
    
    NSString *preUrl = @"hs://";
    
    if ([urlString hasPrefix:preUrl])
    {
        NSString *preString = [strArr firstObject];
        NSString *lastString = [strArr lastObject];
        NSString *methodStr = [[preString substringFromIndex:preUrl.length] stringByReplacingOccurrencesOfString:@"_" withString:@":"];
        if (methodStr)
        {
            [self performSelector:NSSelectorFromString(methodStr) withObject:lastString];
        }
        return NO;
    }
    
    NSLog(@"%@", request.URL);
    
    return YES;
}


- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
   
    
}


@end
