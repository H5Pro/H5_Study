//
//  ViewController.m
//  stripe-ios-demo
//
//  Created by 付金亮 on 2018/11/22.
//  Copyright © 2018 付金亮. All rights reserved.
//

#import "ViewController.h"
#import <Stripe/Stripe.h>
#import <AFNetworking.h>
static NSString * const baseURLStr = @"http://192.168.43.231:3000/";
static NSString * const stripeAPIVersion = @"2018-11-08";
static NSString * const getCustomerKeyUrl = @"ephemeral_keys";
typedef void (^STPJSONResponseCompletionBlock)(NSDictionary *responseObject, NSError *error);
@interface ViewController () <STPPaymentContextDelegate>
@property (strong, nonatomic) STPPaymentContext *paymentContext;
@end

@implementation ViewController
- (instancetype)init {
    self = [super initWithNibName:nil bundle:nil];
    if (self) {
        STPCustomerContext *customerContext = [[STPCustomerContext alloc]initWithKeyProvider: nil];
        self.paymentContext = [[STPPaymentContext alloc] initWithCustomerContext:customerContext];
        self.paymentContext.delegate = self;
        self.paymentContext.hostViewController = self;
        self.paymentContext.paymentAmount = 5000; // This in cents, i.e. $50 USD
    }
    return self;
}
- (void)viewDidLoad {
    // Do any additional setup after loading the view, typically from a nib.
    [super viewDidLoad];
}
- (void)createCustomerKeyWithAPIVersion:(NSString *)apiVersion completion:(STPJSONResponseCompletionBlock)completion {
    NSURL *url = [[NSURL URLWithString: baseURLStr] URLByAppendingPathComponent: getCustomerKeyUrl];
    NSDictionary *params = @{
        @"stripe_version": apiVersion,
        @"customerId": @12334
        };
    AFHTTPSessionManager *manager = [AFHTTPSessionManager manager];
    manager.responseSerializer.acceptableContentTypes = [NSSet setWithObjects:@"application/json", @"text/json", @"text/javascript", nil];
    [manager POST:url.absoluteString parameters:params progress:^(NSProgress * _Nonnull uploadProgress) {
//        NSLog(@"%@", uploadProgress);
    } success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
        completion(responseObject, nil);
    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
        completion(nil, error);
    }];
}
// stripe 支付按钮点击
- (IBAction)stripePayBtnClick:(id)sender {
    [self createCustomerKeyWithAPIVersion:stripeAPIVersion completion:^(NSDictionary *responseObject, NSError *error) {
        if (error == nil) {
            
        }
    }];
}
// stripe 绑定按钮点击
- (IBAction)stripeBindBtnClick:(id)sender {
    NSLog(@"stripe 绑定按钮点击");
}

#pragma mark - STPPaymentContextDelegate
// 当付款上下文的内容发生变化时(例如，当用户选择新的付款方式或输入送货信息)
- (void) paymentContextDidChange:(STPPaymentContext *)paymentContext{
}
// 当用户成功选择付款方式并完成购买时，将调用此方法
- (void) paymentContext:(STPPaymentContext *)paymentContext didCreatePaymentResult:(STPPaymentResult *)paymentResult completion:(STPErrorBlock)completion {
//    [self.apiClient createCharge:paymentResult.source.stripeID completion:^(NSError *error) {
//        if (error) {
//            completion(error);
//        } else {
//            completion(nil);
//        }
//    }];
}
// 在上一个方法之后调用此方法，此时已显示任何已显示的辅助UI（例如Apple Pay对话框）
- (void) paymentContext:(STPPaymentContext *)paymentContext didFinishWithStatus:(STPPaymentStatus)status error:(NSError *)error {
    switch (status) {
            case STPPaymentStatusSuccess:
//            [self showReceipt];
            break;
            case STPPaymentStatusError:
//            [self showError:error];
            break;
            case STPPaymentStatusUserCancellation:
            return; // Do nothing
        default:
            break;
    }
}
// 在极少数情况下调用此方法，即支付上下文的初始加载调用失败，通常是由于缺少Internet连接
- (void) paymentContext:(STPPaymentContext *)paymentContext didFailToLoadWithError:(nonnull NSError *)error{
//    [self.navigationController popViewControllerAnimated:YES];
}
// 如果您STPPaymentContext用于收集送货信息，则在您的用户输入送货地址后会调用此方法
- (void)paymentContext:(STPPaymentContext *)paymentContext didUpdateShippingAddress:(STPAddress *)address completion:(STPShippingMethodsCompletionBlock)completion{
    //???: 以下代码不理解，暂时屏蔽
    /* PKShippingMethod *upsGround = [PKShippingMethod new];
    upsGround.amount = [NSDecimalNumber decimalNumberWithString:@"0"];
    upsGround.label = @"UPS Ground";
    upsGround.detail = @"Arrives in 3-5 days";
    upsGround.identifier = @"ups_ground";
    PKShippingMethod *fedEx = [PKShippingMethod new];
    fedEx.amount = [NSDecimalNumber decimalNumberWithString:@"5.99"];
    fedEx.label = @"FedEx";
    fedEx.detail = @"Arrives tomorrow";
    fedEx.identifier = @"fedex";
    if ([address.country isEqualToString:@"US"]) {
        completion(STPShippingStatusValid, nil, @[upsGround, fedEx], upsGround);
    }
    else {
        completion(STPShippingStatusInvalid, nil, nil, nil);
    } */
}

@end
