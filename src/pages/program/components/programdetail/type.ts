export interface responseDonation {
  checkoutPaymentIntent: string;
  createTime: string;
  expirationTime: string;
  id: string;
  links: [
    {
      href: string;
      method: string;
      rel: string;
      title: string;
      mediaType: string;
      encType: string;
    }
  ];
  payer: {
    addressPortable: {
      addressDetails: {
        buildingName: string;
        deliveryService: string;
        streetName: string;
        streetNumber: string;
        streetType: string;
        subBuilding: string;
      };
      addressLine1: string;
      addressLine2: string;
      addressLine3: string;
      adminArea1: string;
      adminArea2: string;
      adminArea3: string;
      adminArea4: string;
      countryCode: string;
      postalCode: string;
    };
    birthDate: string;
    email: string;
    name: {
      alternateFullName: string;
      fullName: string;
      givenName: string;
      middleName: string;
      prefix: string;
      suffix: string;
      surname: string;
    };
    payerId: string;
    phoneWithType: {
      phoneNumber: {
        countryCallingCode: string;
        extensionNumber: string;
        nationalNumber: string;
      };
      phoneType: string;
    };
    taxInfo: {
      taxId: string;
      taxIdType: string;
    };
  };
  purchaseUnits: [
    {
      amountWithBreakdown: {
        amountBreakdown: {
          discount: {
            currencyCode: string;
            value: string;
          };
          handling: {
            currencyCode: string;
            value: string;
          };
          insurance: {
            currencyCode: string;
            value: string;
          };
          itemTotal: {
            currencyCode: string;
            value: string;
          };
          shipping: {
            currencyCode: string;
            value: string;
          };
          shippingDiscount: {
            currencyCode: string;
            value: string;
          };
          taxTotal: {
            currencyCode: string;
            value: string;
          };
        };
        currencyCode: string;
        value: string;
      };
      customId: string;
      description: string;
      id: string;
      invoiceId: string;
      items: [
        {
          category: string;
          name: string;
          description: string;
          quantity: string;
          sku: string;
          tax: {
            currencyCode: string;
            value: string;
          };
          unitAmount: {
            currencyCode: string;
            value: string;
          };
        }
      ];
      payee: {
        clientId: string;
        email: string;
        merchantId: string;
        payeeDisplayable: {
          brandName: string;
          businessPhone: {
            countryCallingCode: string;
            extensionNumber: string;
            nationalNumber: string;
          };
          email: string;
        };
      };
      paymentInstruction: {
        platformFees: [string];
        payeePricingTierId: string;
        disbursementMode: string;
      };
      payments: {
        authorizations: [
          {
            amount: {
              currencyCode: string;
              value: string;
            };
            authorizationStatusDetails: {
              reason: string;
            };
            createTime: string;
            expirationTime: string;
            id: string;
            invoiceId: string;
            links: [
              {
                href: string;
                method: string;
                rel: string;
                title: string;
                mediaType: string;
                encType: string;
              }
            ];
            sellerProtection: {
              disputeCategories: [string];
              status: string;
            };
            status: string;
            updateTime: string;
          }
        ];
        captures: [
          {
            amount: {
              currencyCode: string;
              value: string;
            };
            captureStatusDetails: {
              reason: string;
            };
            createTime: string;
            disbursementMode: string;
            finalCapture: true;
            id: string;
            invoiceId: string;
            links: [
              {
                href: string;
                method: string;
                rel: string;
                title: string;
                mediaType: string;
                encType: string;
              }
            ];
            sellerProtection: {
              disputeCategories: [string];
              status: string;
            };
            sellerReceivableBreakdown: {
              grossAmount: {
                currencyCode: string;
                value: string;
              };
              netAmount: {
                currencyCode: string;
                value: string;
              };
              paypalFee: {
                currencyCode: string;
                value: string;
              };
              receivableAmount: {
                currencyCode: string;
                value: string;
              };
            };
            status: string;
            updateTime: string;
          }
        ];
        refunds: [
          {
            amount: {
              currencyCode: string;
              value: string;
            };
            createTime: string;
            id: string;
            invoiceId: string;
            links: [
              {
                href: string;
                method: string;
                rel: string;
                title: string;
                mediaType: string;
                encType: string;
              }
            ];
            noteToPayer: string;
            refundStatusDetails: {
              reason: string;
            };
            sellerPayableBreakdown: {
              grossAmount: {
                currencyCode: string;
                value: string;
              };
              netAmount: {
                currencyCode: string;
                value: string;
              };
              netAmountBreakdown: [
                {
                  convertedAmount: {
                    currencyCode: string;
                    value: string;
                  };
                  payableAmount: {
                    currencyCode: string;
                    value: string;
                  };
                }
              ];
              paypalFee: {
                currencyCode: string;
                value: string;
              };
              totalRefundedAmount: {
                currencyCode: string;
                value: string;
              };
            };
            status: string;
            updateTime: string;
          }
        ];
      };
      referenceId: string;
      shippingDetail: {
        name: {
          fullName: string;
        };
        type: string;
        addressPortable: {
          addressDetails: {
            buildingName: string;
            deliveryService: string;
            streetName: string;
            streetNumber: string;
            streetType: string;
            subBuilding: string;
          };
          addressLine1: string;
          addressLine2: string;
          addressLine3: string;
          adminArea1: string;
          adminArea2: string;
          adminArea3: string;
          adminArea4: string;
          countryCode: string;
          postalCode: string;
        };
      };
      softDescriptor: string;
    }
  ];
  status: string;
  updateTime: string;
}

export interface requestDonation {
  reason: string;
  amout: number;
  programId: string;
}
