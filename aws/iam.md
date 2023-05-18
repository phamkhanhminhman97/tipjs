* Policy -  Mỗi user và group có thể gắn tối đa 10 policy

 - INLINE POLICY - Viết policy trực tiếp cho USER

 - MANAGED POLICIES - Tạo policy sau đó gắn trực tiếp cho USER

 - MANAGED POLICIES and GROUP -Tạo policy sau đó gắn cho group chứa USER

* AWS Managed Policy 
 - Các Policy do AWS tạo sẵn
 - Job Policy: Các policy được AWS tạo sắn dựa trên nhóm công việc]

* Customer Managed Policy
 - Các Policy do người dùng tự tạo và quản lý

```IAM JSON
```{
    "Version": "2012-12-12",
    "Statement": [
        {
            "Action": [
                "iam:GetContextKeyForCustomPolicy",
                "iam:GetContextKeyForCustomPolicy",
            ],
            "Effect": "Allow"
            "Resource": "*"
        }
    ]
} ```

* Sid: định danh statement

* Action: Mô tả hành động tới AWS Resource - Support wild card. Example: "Action": "s3:*"

* Effect: Allow hoặc Deny

* Resource: Định danh tài nguyên được/không được phép tác động - Mô tả thông tin ARN
 - ARN : `arn:aws:<service>:<accountID>:<resource> - arn:aws:iam::694377397146:group/admin

* Condition: lọc thêm các yêu cầu thực hiện policy