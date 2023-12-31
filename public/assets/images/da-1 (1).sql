USE [pharmacy_online_final]
GO
SET IDENTITY_INSERT [dbo].[order_info] ON 

INSERT [dbo].[order_info] ([id], [address], [amount], [delivery_method], [name], [note], [payment_method], [phone], [account_id], [date], [status]) VALUES (1, N', Xã Ph?n M?, Huy?n Phú Luong, T?nh Thái Nguyên.', N'380000', N'delivery', N'MAI TRAN', N'', N'VNPay', N'02455648651', NULL, N'28-11-2023 19:44:51', N'Wait for confirmation')
INSERT [dbo].[order_info] ([id], [address], [amount], [delivery_method], [name], [note], [payment_method], [phone], [account_id], [date], [status]) VALUES (2, N', Xã Ph?n M?, Huy?n Phú Luong, T?nh Thái Nguyên.', N'3800000', N'delivery', N'MAI TRAN', N'', N'VNPay', N'02455648651', NULL, N'28-11-2023 19:44:51', N'Wait for confirmation')
INSERT [dbo].[order_info] ([id], [address], [amount], [delivery_method], [name], [note], [payment_method], [phone], [account_id], [date], [status]) VALUES (5, N'An Luong, Xã Ch? Ð?o, Huy?n Van Lâm, T?nh Hung Yên.', N'264000', N'delivery', N'Trieu tran', N'', N'VNPay', N'0789458707', NULL, N'28-11-2023 19:44:51', N'Confirmed')
INSERT [dbo].[order_info] ([id], [address], [amount], [delivery_method], [name], [note], [payment_method], [phone], [account_id], [date], [status]) VALUES (6, N'An Lương, Xã Chỉ Đạo, Huyện Văn Lâm, Tỉnh Hưng Yên.', N'264000', N'delivery', N'Trieu tran', N'', N'VNPay', N'0789458707', NULL, N'28-11-2023 19:44:51', N'Wait for confirmation')
INSERT [dbo].[order_info] ([id], [address], [amount], [delivery_method], [name], [note], [payment_method], [phone], [account_id], [date], [status]) VALUES (7, N'An Lương, Xã Chỉ Đạo, Huyện Văn Lâm, Tỉnh Hưng Yên.', N'300000', N'pharmacy', N'Trieu Tran', N'', N'cash', N'0789458707', NULL, N'28-11-2023 19:44:51', N'Wait for confirmation')
INSERT [dbo].[order_info] ([id], [address], [amount], [delivery_method], [name], [note], [payment_method], [phone], [account_id], [date], [status]) VALUES (8, N'An Lương, Xã Chỉ Đạo, Huyện Văn Lâm, Tỉnh Hưng Yên.', N'300000', N'delivery', N'Trieu Tran', N'', N'cash', N'0789458707', NULL, N'28-11-2023 19:44:51', N'Wait for confirmation')
INSERT [dbo].[order_info] ([id], [address], [amount], [delivery_method], [name], [note], [payment_method], [phone], [account_id], [date], [status]) VALUES (9, N'An Lương, Xã Chỉ Đạo, Huyện Văn Lâm, Tỉnh Hưng Yên.', N'264000', N'delivery', N'Trieu tran', N'', N'VNPay', N'0789458707', NULL, N'28-11-2023 19:44:51', N'Wait for confirmation')
INSERT [dbo].[order_info] ([id], [address], [amount], [delivery_method], [name], [note], [payment_method], [phone], [account_id], [date], [status]) VALUES (10, N'An Lương, Xã Chỉ Đạo, Huyện Văn Lâm, Tỉnh Hưng Yên.', N'310000', N'delivery', N'Trieu tran', N'', N'VNPay', N'0789458707', N'1', N'28-11-2023 19:44:51', N'Wait for confirmation')
INSERT [dbo].[order_info] ([id], [address], [amount], [delivery_method], [name], [note], [payment_method], [phone], [account_id], [date], [status]) VALUES (11, N'An Lương, Xã Chỉ Đạo, Huyện Văn Lâm, Tỉnh Hưng Yên.', N'347600', N'delivery', N'Trieu tran', N'', N'VNPay', N'0789458707', N'1', N'28-11-2023 19:44:51', N'Delivering')
INSERT [dbo].[order_info] ([id], [address], [amount], [delivery_method], [name], [note], [payment_method], [phone], [account_id], [date], [status]) VALUES (12, N'An Lương, Xã Chỉ Đạo, Huyện Văn Lâm, Tỉnh Hưng Yên.', N'185000', N'delivery', N'Trieu Tran', N'', N'cash', N'0789458707', N'1', N'28-11-2023 19:44:51', N'Confirmed')
INSERT [dbo].[order_info] ([id], [address], [amount], [delivery_method], [name], [note], [payment_method], [phone], [account_id], [date], [status]) VALUES (13, N'An Lương, Xã Chỉ Đạo, Huyện Văn Lâm, Tỉnh Hưng Yên.', N'607200', N'delivery', N'Trieu tran', N'', N'VNPay', N'0789458707', N'1', N'28-11-2023 21:45:02', N'Wait for confirmation')
SET IDENTITY_INSERT [dbo].[order_info] OFF
GO
SET IDENTITY_INSERT [dbo].[product_info] ON 

INSERT [dbo].[product_info] ([id], [nameproduct], [quantity], [order_id], [price]) VALUES (1, N'Thanh Cong Gold Cordyceps', 1, 10, NULL)
INSERT [dbo].[product_info] ([id], [nameproduct], [quantity], [order_id], [price]) VALUES (2, N'Special Kid Sommeil Eric Favre Wellness', 1, 10, NULL)
INSERT [dbo].[product_info] ([id], [nameproduct], [quantity], [order_id], [price]) VALUES (3, N'Melissa Dream New Nordic', 1, 11, NULL)
INSERT [dbo].[product_info] ([id], [nameproduct], [quantity], [order_id], [price]) VALUES (4, N'Thanh Cong Gold Cordyceps', 1, 11, NULL)
INSERT [dbo].[product_info] ([id], [nameproduct], [quantity], [order_id], [price]) VALUES (5, N'Special Kid Sommeil Eric Favre Wellness', 1, 11, NULL)
INSERT [dbo].[product_info] ([id], [nameproduct], [quantity], [order_id], [price]) VALUES (6, N'Thanh Cong Gold Cordyceps', 1, 12, NULL)
INSERT [dbo].[product_info] ([id], [nameproduct], [quantity], [order_id], [price]) VALUES (7, N'Melissa Dream New Nordic', 1, 13, CAST(115000.00 AS Numeric(38, 2)))
INSERT [dbo].[product_info] ([id], [nameproduct], [quantity], [order_id], [price]) VALUES (8, N'Euro Ginko Gold HD Pharma', 1, 13, CAST(295000.00 AS Numeric(38, 2)))
INSERT [dbo].[product_info] ([id], [nameproduct], [quantity], [order_id], [price]) VALUES (9, N'Thanh Cong Gold Cordyceps', 1, 13, CAST(185000.00 AS Numeric(38, 2)))
INSERT [dbo].[product_info] ([id], [nameproduct], [quantity], [order_id], [price]) VALUES (10, N'Special Kid Sommeil Eric Favre Wellness', 1, 13, CAST(95000.00 AS Numeric(38, 2)))
SET IDENTITY_INSERT [dbo].[product_info] OFF
GO
SET IDENTITY_INSERT [dbo].[account] ON 

INSERT [dbo].[account] ([id], [avatar], [dob], [mail], [name], [password], [phone], [roles], [username]) VALUES (1, NULL, NULL, N'trandtrieu@gmail.com', N'Trieu Tran', N'$2a$10$ts7dkRMF1OgPKVl3wSIGmug2o1U6EJ1VORO6XSZH6c/rbJrHenTKS', N'0789458707', N'USER', N'trieutran123')
SET IDENTITY_INSERT [dbo].[account] OFF
GO
SET IDENTITY_INSERT [dbo].[cart] ON 

INSERT [dbo].[cart] ([id], [account_id]) VALUES (11, 1)
SET IDENTITY_INSERT [dbo].[cart] OFF
GO
SET IDENTITY_INSERT [dbo].[delivery_address] ON 

INSERT [dbo].[delivery_address] ([address_id], [recipient_full_name], [recipient_phone_number], [specific_address], [status_default], [user_id]) VALUES (6, N'Trieu tran', N'0789458707', N'An Lương, Xã Chỉ Đạo, Huyện Văn Lâm, Tỉnh Hưng Yên.', 1, 1)
SET IDENTITY_INSERT [dbo].[delivery_address] OFF
GO
SET IDENTITY_INSERT [dbo].[discountcode] ON 

INSERT [dbo].[discountcode] ([id], [code], [condition], [discount_percentage], [expiry_date], [status], [times_usable]) VALUES (1, N'0CJKBL', 300000, 4, CAST(N'2023-12-24T09:59:00.0000000' AS DateTime2), 1, 0)
INSERT [dbo].[discountcode] ([id], [code], [condition], [discount_percentage], [expiry_date], [status], [times_usable]) VALUES (2, N'LX6XNB', 300000, 12, CAST(N'2023-12-15T10:00:00.0000000' AS DateTime2), 1, 103)
SET IDENTITY_INSERT [dbo].[discountcode] OFF
GO
INSERT [dbo].[discount_account] ([discount_id], [account_id]) VALUES (1, 1)
INSERT [dbo].[discount_account] ([discount_id], [account_id]) VALUES (2, 1)
GO
SET IDENTITY_INSERT [dbo].[category] ON 

INSERT [dbo].[category] ([category_id], [category_img], [category_name]) VALUES (1, N'https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(75)/https://chiaki.vn/upload/product/2023/07/vien-uong-neuro-optimizer-jarrow-120-vien-cua-my-64a7dabcb580a-07072023162828.jpg', N'Cerebral Nerves')
INSERT [dbo].[category] ([category_id], [category_img], [category_name]) VALUES (2, N'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR9oM8QMbu_JUFrgluV2HDuY2Q-qRzdYb8ml-U0_hy6EjwjUWe7XiThmFTWCzWlfU0tkdEvE_RQwmQRBqn5VvQvNf5ZS0Ys9Xeprk5tMnf6vshKGCKptmba&usqp=CAE', N'Vitamin & Minerals')
INSERT [dbo].[category] ([category_id], [category_img], [category_name]) VALUES (3, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00029360_lipitas_jpanwell_60v_4493_6006_large_eed588f6b1.JPG', N'Cardiovascular Health')
INSERT [dbo].[category] ([category_id], [category_img], [category_name]) VALUES (4, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00502653_livespo_dia_30_10_ong_x_5ml_bao_tu_loi_khuan_cho_nguoi_tieu_chay_roi_loan_tieu_hoa_6463_6376_large_16d30e8870.jpg', N'AIDS Digestion')
INSERT [dbo].[category] ([category_id], [category_img], [category_name]) VALUES (5, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00032922_vien_uong_ho_tro_da_day_dr_sto_jpanwell_60v_9829_61aa_large_795f1629a2.jpg', N'Physiology')
INSERT [dbo].[category] ([category_id], [category_img], [category_name]) VALUES (6, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09707_b7893a5b10.jpg', N'Sexual Support')
SET IDENTITY_INSERT [dbo].[category] OFF
GO
SET IDENTITY_INSERT [dbo].[product] ON 

INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (16, CAST(N'2023-11-14T00:00:00.0000000' AS DateTime2), N'Soki', N'Soki Tium Baby soluble powder', CAST(380000.00 AS Numeric(38, 2)), 30, 1, 0, 1)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (17, CAST(N'2023-11-14T00:00:00.0000000' AS DateTime2), N'Jpanwell', N'Gaba Jpanwell', CAST(960000.00 AS Numeric(38, 2)), 30, 1, 0, 1)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (19, CAST(N'2023-11-14T00:00:00.0000000' AS DateTime2), N'Hdpharma', N'Euro Ginko Gold HD Pharma', CAST(295000.00 AS Numeric(38, 2)), 30, 1, 0, 1)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (27, CAST(N'2023-11-14T00:00:00.0000000' AS DateTime2), N'NEW NORDIC', N'Melissa Dream New Nordic', CAST(115000.00 AS Numeric(38, 2)), 30, 1, 0, 1)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (28, CAST(N'2023-11-14T00:00:00.0000000' AS DateTime2), N'Thanh Cong', N'Thanh Cong Gold Cordyceps', CAST(185000.00 AS Numeric(38, 2)), 30, 1, 0, 1)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (29, CAST(N'2023-11-15T00:00:00.0000000' AS DateTime2), N'Special Kid', N'Special Kid Sommeil Eric Favre Wellness', CAST(95000.00 AS Numeric(38, 2)), 30, 1, 0, 1)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (30, CAST(N'2023-11-15T00:00:00.0000000' AS DateTime2), N'Buona', N'Buona Circadiem', CAST(126000.00 AS Numeric(38, 2)), 30, 1, 0, 1)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (31, CAST(N'2023-11-15T00:00:00.0000000' AS DateTime2), N'Botania', N'Bonisleep Botania', CAST(405000.00 AS Numeric(38, 2)), 30, 1, 0, 1)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (32, CAST(N'2023-11-15T00:00:00.0000000' AS DateTime2), N'Nature''s Bounty', N'KudNature''s Bounty Melatonin os Vitamin C', CAST(190000.00 AS Numeric(38, 2)), 30, 1, 0, 1)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (34, CAST(N'2023-11-21T00:00:00.0000000' AS DateTime2), N'Pharmalife', N'Sonno BimBi Gocce Pharmalife', CAST(345000.00 AS Numeric(38, 2)), 0, 0, 0, 1)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (35, CAST(N'2023-11-21T00:00:00.0000000' AS DateTime2), N'TC Pharma', N'Precare Mama Diamond', CAST(185000.00 AS Numeric(38, 2)), 30, 1, 0, 2)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (36, CAST(N'2023-11-21T00:00:00.0000000' AS DateTime2), N'KUDOS', N'Kudos Kids Multivitamins Plus', CAST(149000.00 AS Numeric(38, 2)), 30, 1, 0, 2)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (37, CAST(N'2023-11-21T00:00:00.0000000' AS DateTime2), N'KUDOS', N'Kudos Daily Vitamins Plus', CAST(109650.00 AS Numeric(38, 2)), 30, 1, 0, 2)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (38, CAST(N'2023-11-21T00:00:00.0000000' AS DateTime2), N'KUDOS', N'Kudos Vitamin C', CAST(98000.00 AS Numeric(38, 2)), 30, 1, 0, 2)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (39, CAST(N'2023-11-21T00:00:00.0000000' AS DateTime2), N'KUDOS', N'Kudos Bone orange', CAST(115000.00 AS Numeric(38, 2)), 30, 1, 0, 2)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (40, CAST(N'2023-07-09T00:00:00.0000000' AS DateTime2), N'Hatro', N'Fer + Multi Hatro syrup', CAST(69000.00 AS Numeric(38, 2)), 30, 1, 0, 2)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (41, CAST(N'2023-07-09T00:00:00.0000000' AS DateTime2), N'Hatro', N'ZinC + Lysin Hatro syrup', CAST(150000.00 AS Numeric(38, 2)), 30, 1, 0, 2)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (42, CAST(N'2023-07-09T00:00:00.0000000' AS DateTime2), N'Vitamins For Life', N'Prenatal One Vitamins', CAST(660000.00 AS Numeric(38, 2)), 30, 1, 0, 2)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (43, CAST(N'2023-07-09T00:00:00.0000000' AS DateTime2), N'Pharma World', N'Pharma Word Calcium K-2', CAST(376000.00 AS Numeric(38, 2)), 30, 1, 0, 2)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (44, CAST(N'2023-07-09T00:00:00.0000000' AS DateTime2), N'GINIC', N'Feginic oral tubes', CAST(215000.00 AS Numeric(38, 2)), 30, 1, 0, 2)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (45, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'Vitamins For Life', N'Heart Ace Support Vitamins ', CAST(685000.00 AS Numeric(38, 2)), 30, 1, 0, 3)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (46, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'Vitamins For Life', N'Omega Plus 10 Vitamins', CAST(285000.00 AS Numeric(38, 2)), 30, 1, 0, 3)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (47, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'Vitamins For Life', N'Heart Ace Support Vitamins ', CAST(415000.00 AS Numeric(38, 2)), 30, 1, 0, 3)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (48, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'Jpanwell', N'Jpanwell Hato Gold ', CAST(995000.00 AS Numeric(38, 2)), 30, 1, 0, 3)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (49, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'Jpanwell', N'Jpanwell Blood Pressure+++ ', CAST(99000.00 AS Numeric(38, 2)), 30, 1, 0, 3)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (50, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'Pharmekal', N'Pharmekal CoQ10 30mg', CAST(169000.00 AS Numeric(38, 2)), 30, 1, 0, 3)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (51, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'Vitamins For Life', N'Cholesterol Aid Vitamins', CAST(390000.00 AS Numeric(38, 2)), 30, 1, 0, 3)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (52, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'Thanh Cong', N'Co Enzyme Q10 Thanh Cong', CAST(68000.00 AS Numeric(38, 2)), 30, 1, 0, 3)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (53, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'NEW NORDIC', N'Active Legs New Nordic', CAST(141000.00 AS Numeric(38, 2)), 30, 1, 1, 3)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (54, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'Kingphar', N'Chi Kingphar Vascular Strengthening', CAST(306000.00 AS Numeric(38, 2)), 30, 1, 0, 3)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (55, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'Jpanwell', N'JP Natural Organic Jpanwell', CAST(780000.00 AS Numeric(38, 2)), 30, 1, 0, 4)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (56, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'Livespo', N'Livespo Dia 30 probiotic spores', CAST(270000.00 AS Numeric(38, 2)), 30, 1, 0, 4)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (57, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'Phuong Y Nam', N'Bao Da Phuong Y Nam', CAST(115000.00 AS Numeric(38, 2)), 30, 1, 0, 4)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (58, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'Soki', N'Soki Miter soluble powder', CAST(95000.00 AS Numeric(38, 2)), 30, 1, 0, 4)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (59, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'Soki', N'Soki Novo soluble powder ', CAST(365000.00 AS Numeric(38, 2)), 30, 1, 0, 4)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (60, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'GINIC', N'Ginkid syrup', CAST(72000.00 AS Numeric(38, 2)), 30, 1, 0, 4)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (61, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'GINIC', N'Ginkid GINIC Digestive Enzyme', CAST(105000.00 AS Numeric(38, 2)), 30, 1, 0, 4)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (62, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'Livespo', N'LiveSpo Clausy multi-antibiotic', CAST(159000.00 AS Numeric(38, 2)), 30, 1, 0, 4)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (63, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'Jpanwell', N'Jpanwell Bifido Plus ', CAST(1024000.00 AS Numeric(38, 2)), 30, 1, 0, 4)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (64, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'Jpanwell', N'Dr. Pills Sto Jpanwell', CAST(1100000.00 AS Numeric(38, 2)), 30, 1, 0, 4)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (65, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'KenKan', N'Kenkan Kaki Ekisu Tohchukasou ', CAST(515000.00 AS Numeric(38, 2)), 30, 1, 1, 5)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (66, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'KenKan', N'Kenkan Seishun Primrose', CAST(329000.00 AS Numeric(38, 2)), 30, 1, 0, 5)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (67, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'OCAVILL', N'Ironmen Ocavill ', CAST(492000.00 AS Numeric(38, 2)), 30, 1, 0, 5)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (68, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'Jpanwell', N'Jpanwell Jp Lady', CAST(1300000.00 AS Numeric(38, 2)), 30, 1, 0, 5)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (69, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'OCAVILL', N'Léana Ocavill', CAST(680000.00 AS Numeric(38, 2)), 30, 1, 1, 5)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (70, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'B.pure', N'Oyster Extract Vitatree Essence', CAST(660000.00 AS Numeric(38, 2)), 30, 1, 0, 5)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (71, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'B.pure', N'Essence Of Kangaroo 40000 Max Vitatree', CAST(680000.00 AS Numeric(38, 2)), 30, 1, 0, 5)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (72, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'B.pure', N'To Nu Vuong Royal Care', CAST(380000.00 AS Numeric(38, 2)), 30, 1, 0, 5)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (73, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'Royal Care', N'Vuong Nu Khang Royal Care', CAST(145000.00 AS Numeric(38, 2)), 30, 1, 0, 5)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (74, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'Vesta', N'Onagre Cevrai', CAST(195000.00 AS Numeric(38, 2)), 30, 1, 0, 5)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (75, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'Lab Well', N'Via Him Lab Well ', CAST(291000.00 AS Numeric(38, 2)), 30, 1, 0, 5)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (76, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'Dolexphar', N'NV Dolexpharm Ginseng', CAST(125000.00 AS Numeric(38, 2)), 30, 1, 0, 5)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (77, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'Jpanwell', N'Best King Jpanwell ', CAST(1300000.00 AS Numeric(38, 2)), 30, 1, 0, 5)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (78, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'Nature''s Supplements', N'Maca F Female Empower Nature''s ', CAST(660000.00 AS Numeric(38, 2)), 30, 1, 0, 5)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (79, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'Nature''s Supplements', N'Maca M Female Empower Nature''s ', CAST(660000.00 AS Numeric(38, 2)), 30, 1, 0, 5)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (80, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'OKAMOTO', N'Okamoto 0.03 Platinum condoms', CAST(147000.00 AS Numeric(38, 2)), 50, 1, 0, 6)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (81, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'OKAMOTO', N'Okamoto Crown condoms', CAST(205000.00 AS Numeric(38, 2)), 50, 1, 0, 6)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (82, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'OKAMOTO', N'Okamoto Crown condoms', CAST(56000.00 AS Numeric(38, 2)), 50, 1, 0, 6)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (83, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'OKAMOTO', N'Okamoto Skinless Skin Purity condoms', CAST(79000.00 AS Numeric(38, 2)), 50, 1, 0, 6)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (84, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'OKAMOTO', N'Okamoto Skinless Skin Purity condoms ', CAST(29000.00 AS Numeric(38, 2)), 50, 1, 0, 6)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (85, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'SAGAMI', N'Sagami Classic condoms', CAST(148000.00 AS Numeric(38, 2)), 50, 1, 0, 6)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (86, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'SAGAMI', N'Sagami condom', CAST(150000.00 AS Numeric(38, 2)), 50, 1, 0, 6)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (87, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'SAGAMI', N'Sagami Love Me Gold condoms', CAST(90000.00 AS Numeric(38, 2)), 50, 1, 0, 6)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (88, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'SAFEFIT', N'Safefit Freezer Max S52 condoms ', CAST(49000.00 AS Numeric(38, 2)), 50, 1, 0, 6)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (89, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'SAFEFIT', N'Safefit Freezer Max S52 condoms', CAST(19000.00 AS Numeric(38, 2)), 50, 1, 0, 6)
INSERT [dbo].[product] ([product_id], [created_date], [p_brand], [p_name], [p_price], [p_quantity], [p_status], [p_type], [category_id]) VALUES (90, CAST(N'2023-11-22T00:00:00.0000000' AS DateTime2), N'SAFEFIT', N'Safefit 003 S52 condoms', CAST(59000.00 AS Numeric(38, 2)), 50, 1, 0, 6)
SET IDENTITY_INSERT [dbo].[product] OFF
GO
SET IDENTITY_INSERT [dbo].[feedback] ON 

INSERT [dbo].[feedback] ([feedback_id], [comment], [created_at], [created_date], [rating], [product_id], [user_id]) VALUES (2, N'asdasdasd', CAST(N'14:06:23.4366667' AS Time), CAST(N'2023-11-28' AS Date), 3, 34, 1)
SET IDENTITY_INSERT [dbo].[feedback] OFF
GO
SET IDENTITY_INSERT [dbo].[prescription] ON 

INSERT [dbo].[prescription] ([id], [created_date], [created_time], [email], [image_urls], [name], [note], [phone], [status], [updated_date], [updated_time], [account_id]) VALUES (1, CAST(N'2023-11-28' AS Date), CAST(N'20:35:46.6233333' AS Time), N'trieudz02@gmail.com', N'cristiano-ronaldo-glowing-football-art-yjv30z0sl2zhi0l2.jpg', N'ngo quyen', N'', N'0914069288', 0, NULL, NULL, 1)
SET IDENTITY_INSERT [dbo].[prescription] OFF
GO
SET IDENTITY_INSERT [dbo].[wishlist] ON 

INSERT [dbo].[wishlist] ([id], [created_date], [account_id]) VALUES (5, CAST(N'2023-11-28T14:17:45.4490000' AS DateTime2), 1)
SET IDENTITY_INSERT [dbo].[wishlist] OFF
GO
SET IDENTITY_INSERT [dbo].[blog] ON 

INSERT [dbo].[blog] ([blog_id], [author_id], [category_blog_id], [content], [create_date], [create_time], [status], [thumbnail], [title], [update_date], [update_time]) VALUES (17, 1, 0, N'The Pharmacity pharmacy chain has been awarded the "Inspiring Brand 2021" prize by Enterprise Asia, a non-governmental organization, for its numerous activities in supporting healthcare.
With its efforts in caring for and improving the health of the Vietnamese people over the years, especially during the COVID-19 pandemic, the Pharmacity pharmacy chain has recently won the Inspiring Brand award from Enterprise Asia.
The "Inspiring Brand" category is part of the "Asia Pacific Enterprise Award 2021" (APEA) organized by the non-governmental organization Enterprise Asia. The event took place at the Gem Center in Ho Chi Minh City on February 25, 2022. APEA is an annual award presented in 14 Asian countries and markets to honor businesses and leaders with outstanding business achievements that create positive values for society. Pharmacity met APEA''s evaluation criteria, which include assessing business data, outstanding products and services in the market, interviews at their headquarters, and a vote by the international advisory council of Enterprise Asia.
Not only did Pharmacity excel in the evaluation criteria and interviews conducted by the award organizers, but it also demonstrated social responsibility and community support during the pandemic by providing essential health protection products at stable prices, making it a preferred destination for consumers.
Pharmacity was one of the first pharmaceutical retail chains in Vietnam, established in 2011. It now has a network of over 800 pharmacies that meet Good Pharmacy Practices (GPP) standards and employs over 3,500 pharmacists.
With the goal of becoming a convenient pharmacy chain, Pharmacity offers a wide range of medications and nearly 8,000 health care products and fast-moving consumer goods. According to Pharmacity representatives, from the onset of the COVID-19 pandemic until now, their pharmacy network has committed to supporting the government and the community by providing essential COVID-19 prevention and treatment products at stable prices.
Pharmacity''s development strategy includes integrating technology and transitioning towards digitalization to enhance productivity, creativity, and improve the customer experience.
Enterprise Asia is a non-governmental organization with a mission to promote a business-spirited Asia aiming for sustainable economic and social development in a progressive and equitable world. Its two main pillars are investing in people and fostering a responsible business spirit.
', CAST(N'2023-10-25' AS Date), CAST(N'15:15:46.6066667' AS Time), NULL, NULL, N'Pharmacity received the Asian Inspirational Brand Award', NULL, NULL)
INSERT [dbo].[blog] ([blog_id], [author_id], [category_blog_id], [content], [create_date], [create_time], [status], [thumbnail], [title], [update_date], [update_time]) VALUES (22, 0, 0, N'<p>Biologics license applications were filed recently for 2 potentially curative gene therapies in sickle cell disease (SCD), representing an astonishing advance for a condition characterized by crippling pain and a shortened life span even with current treatments.</p><p>“I couldn’t be more excited for the SCD community, because it’s long overdue,” said Terri Newman, PharmD, MS, an assistant professor of pharmacy and therapeutics at University of Pittsburgh School of Pharmacy, where she researches outcomes in SCD and barriers to treatment.</p><p>“This is a neglected disease, and we are years behind where we should be in terms of having treatment options for this population. But it’s a long road ahead to establish these gene therapy treatments as viable treatment options. We have to look at access (to current therapies) now,” she said.</p><h2><strong>Disease-Modifying Treatment</strong></h2><p>Discovered in 1910, sickle cell disease is an inherited hemoglobin disorder that is characterized by red blood cells that take on a C-shape similar to a sickle instead of being round. The misshapen red blood cells stick together and clog blood vessels and starve the body of oxygen, which can lead to stroke, pain and organ damage, among other conditions.</p><p>Hydroxyurea, first used in SCD off-label in the 1980s and approved by the FDA for SCD in 1998, reduces sickling and raises the amount of fetal hemoglobin, increasing oxygenation. This versatile drug was a major breakthrough in SCD, which affects an estimated 100,000 individuals in the US, 90% of whom are Black. One percent of children with SCD die before the age of 3, according to the CDC.</p><p>Hydroxyurea was followed by other disease-modifying treatments (DMTs), including Endari (L-glutamine) in 2017, Oxbryta (voxelotor) in 2019 and Adakveo (crizanlizumab) in 2019. In August 2023, the European Commission followed the advice of an advisory committee and withdrew a conditional marketing approval for Adakveo in Europe, although it remains approved by the FDA.</p><p>Hydroxyurea is far and away the most frequently prescribed of the DMTs. Yet just 31% of patients with severe SCD are treated with DMTs, according to a recent study led by Newman, who says patients with SCD are chronically underserved by a medical community that is not adequately trained or focused on treating patients with this condition.</p><p>Resources for elucidating the nature of SCD and developing new treatments have tended to be less available than for other diseases, she says, a conclusion supported by other medical authorities.</p><p>“There’s disparate research funding. Cystic fibrosis has received much more funding than sickle cell disease, and providers have reported in surveys that they do not feel comfortable with managing care for this disease. Some of them rely on information they learned in residency. Some just don’t have the competency,” Newman said.</p><p>Severe SCD shortens the life of a patient by 30 years on average. It can involve frequent hospital stays, quick returns to hospital after treatment and regular blood transfusions. Disease outbreaks can be triggered by physical stress or oxygen-reduced environments, such as high altitudes or airplanes. Cases of post-traumatic stress disorder have been documented following the agony that sickling brings on.</p><p>Although currently policies lean toward limiting opioid prescriptions, the CDC has recommended an exception for individuals with SCD, “acknowledging the important role of opioids in pain management and the dangers of inadequate pain management,” according to the Institute for Clinical and Economic Review (ICER), which published in July 2023 a cost-effectiveness analysis of the SCD gene therapies.</p><p>Patients with SCD often find it challenging to obtain opioid prescriptions when needed because they may be stereotyped as addicts by inexperienced hospital staff.</p><h2><strong>The Need for Screening</strong></h2><p>Other options for managing SCD include screening adults and potential parents for the sickle cell trait, Newman said. Individuals are often unaware of their status, she notes. “There are efforts being made to have a nationwide screening program," said Newman. "There are people who find out only in later life they have sickle cell trait or sickle cell disease, so it’s important as part of the public health effort to make sure people are aware of their status, but also become educated about it, so they can be empowered to make decisions for themselves.”</p><p>Further, preimplantation genetic diagnostic (PGD) testing at the embryo stage of development also is available for SCD, enabling parents to combine PGD with in vitro fertilization (IVF) to avoid giving birth to children who bear this inherited disease. It is unclear whether payers, including Medicaid, which covers 42% of births in the United States, will cover PGD-IVF. There are also ethical concerns about preselecting children using this process. The President’s Council on Bioethics has concluded that in the context of preventing life-threatening diseases, these technologies are appropriate.</p>', CAST(N'2023-10-31' AS Date), CAST(N'10:09:31.4366667' AS Time), NULL, NULL, N'Sickle Cell Disease Finally Getting Its Due', NULL, NULL)
SET IDENTITY_INSERT [dbo].[blog] OFF
GO
SET IDENTITY_INSERT [dbo].[blog_img] ON 

INSERT [dbo].[blog_img] ([img_id], [img_url], [blog_id]) VALUES (12, N'Blog1.png', 17)
INSERT [dbo].[blog_img] ([img_id], [img_url], [blog_id]) VALUES (13, N'Blog1.1.png', 17)
INSERT [dbo].[blog_img] ([img_id], [img_url], [blog_id]) VALUES (19, N'Blog5.png', 22)
SET IDENTITY_INSERT [dbo].[blog_img] OFF
GO
SET IDENTITY_INSERT [dbo].[product_detail] ON 

INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (1, N'Do not use for people who are sensitive to any ingredient of the product.', N'Children under 1 year old: Take 2 packets/time, once a day.

Children 1 year to 3 years old: Take 3 packets/time, once a day.

Children over 3 years old: Take 4 packets/time, once a day.', N'None', N'Soki Tium Baby supplements nutrition, supports digestion and enhances resistance. Helps reduce crying and helps children sleep well.', N'2''-FL HMO , Colostrum , GOS (Galacto Oligosaccharide) , Hydrolyzed Milk Protein', N'Box of 12 Packets x 3g', N'None', N'There is no information about side effects of the product.', N'Store in a dry, cool place, temperature not exceeding 30 degrees Celsius, avoid sunlight.

Keep out of reach of CHILDREN.

', N'Vietnam', 16)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (2, N'Do not use for people who are sensitive to any ingredient of the product.', N'Take 2 pills/day.

Drink 2 hours before bed.

 Use with cold or warm water. ', N'None', N'Gaba pills help reduce symptoms of insomnia, difficulty falling asleep, and poor sleep. Helps reduce feelings of anxiety, restlessness and sedation.', N'Valerian , Saffron flower extract , Vitamin B6 , Vitamin B1 , Vitamin B12 , Mulberry leaf extract , Lotus heart , L-Tryptophan , Glycinebetaine , L-theanine , GABA', N'Box of 60 Tablets', N'None', N'There is no information about side effects of the product.', N'Store in a dry, cool place, temperature below 30 degrees Celsius.

 Keep out of reach of CHILDREN.

', N'Japan', 17)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (3, N'Do not use for people who are sensitive to any ingredient of the product.', N'Take 2 pills/time, 2 times a day.', N'None', N'Euro Ginko Gold HD Pharma pills support blood circulation, increase cerebral blood circulation, and help reduce symptoms caused by cerebral circulatory insufficiency. Helps reduce the risk of sequelae after stroke due to embolism.', N'Ginkgo biloba extract , Dried polyscias fruticosa , Vitamin B1 , Vitamin B2 , Vitamin B6 , Nattokinase , Coenzyme Q10 , Sufficient excipients', N'Box of 100 tablets', N'None', N'There is no information about side effects of the product.', N'Store in a dry, cool place, temperature not exceeding 30 o C, avoid direct light.

Keep out of reach of CHILDREN.

', N'Vietnam', 19)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (16, N'Do not use for people who are sensitive to any ingredient of the product.', N'Take 2 pills 1 hour before going to bed.', N'None', N'Melissa Dream New Nordic reduces mental stress, helps sleep well, reduces difficulty sleeping, prolonged insomnia, and waking up at night.
', N'Magnesium , Vitamin B3 , Vitamin B6 , Vitamin B1 , Vitamin B2 , Vitamin B12 , Silicon dioxide', N'Box of 2 Blisters x 20 Tablets', N'None', N'There is no information about side effects of the product.', N'Store in a dry, cool place, temperature not exceeding 30 o C, avoid direct light.

Keep out of reach of CHILDREN.

', N'Sweden', 27)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (17, N'Do not use for people who are sensitive to any ingredient of the product.', N'Adults: Take 2 tablets/time/day.', N'None', N'Cordyceps Gold supports easy and deep sleep in cases of insomnia and poor sleep. Supports health improvement and increases resistance.', N'Lysine , L-Arginine , Ginseng extract , Ganoderma extract , Zinc , Melatonin , Vitamin B2 , Vitamin B1 , Vitamin B6 , Ginkgo biloba , Protease enzyme , Amylase enzyme , lotus leaf , Royal jelly , Cordyceps , Neem leaf', N'Box of 30 tablets', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'Vietnam', 28)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (18, N'Do not use for people who are sensitive to any ingredient of the product.', N'Take 4 drops daily in the evening before going to bed.', N'None', N'Special Kid Sommeil supports neurostimulation. Helps children sleep well.', N'Hops, lavender, and lemon balm', N'Bottle', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'France', 29)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (19, N'Do not use for people who are sensitive to any ingredient of the product.', N'Take 4 drops daily in the evening before going to bed.', N'None', N'Buona Circadiem supports good sleep. The product is suitable for people with insomnia and difficulty sleeping due to time zone changes.', N'Melatonin', N'Bottle x 20ml', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'IDEA', 30)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (20, N'Do not use for people who are sensitive to any ingredient of the product.', N'Take 2 - 4 pills a day 30 minutes before going to bed.', N'None', N'Bonisleep - a genuine functional food from Canada nourishes the nervous system, soothes stress and anxiety, bringing a physiological, natural sleep, a comfortable spirit, and full of energy.', N'Lactium , L-Arginine , Vitamin B6 , Magnesium oxide , 5-HTP (5 Hydroxytryptophan) , L-theanine , Melatonin , gamma-Aminobutyric acid , Valerian , Chamomile , Passion flower extract , Hops , Rhodiola', N'Box of 30 tablets', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'Canada', 31)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (21, N'Do not use for people who are sensitive to any ingredient of the product.', N'Take 1 pill/day, at bedtime.', N'None', N'Nature''s Bounty Melatonin  helps regulate sleep, helps you sleep deeply, and reduces stress and fatigue caused by insomnia.', N'Melatonin , Excipients just enough', N'Box of 60 Tablets', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'USA', 32)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (22, N'Do not use for people who are sensitive to any ingredient of the product.', N'Children from birth to 12 years old: Use a dose of 10 - 20 drops in the evening before going to bed or as needed.', N'None', N'Sonno Bimbi helps improve sleep, helps children sleep well, falls asleep easily, and helps reduce stress in children.

', N'Demineralized water , Glycerol , Potassium sorbate , Citric Acid , Passion flower extract , Silver leaf flower extract , Lemon balm leaf extract , Lemon balm essential oil', N'Bottle', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'IDEA', 34)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (23, N'Do not use for people who are sensitive to any ingredient of the product.', N'Women who are trying to get pregnant or are pregnant: Take from the time you plan to get pregnant until the month before giving birth: Take 1 pill each time, once a day after meals.', N'None', N'Precare Mama Diamond supplements DHA, EPA, vitamins, minerals and amino acids for pregnant women and during lactation. Maintain health and improve resistance for mothers.', N'DHA , EPA , L-Carnitine , Calcium from milk , Zinc oxide , Lysine HCl , Iron fumarate , Phosphorus , Magnesium oxide , Vitamin B3 , Vitamin B5 , Vitamin E , Vitamin B1 , Vitamin B2 , Vitamin B6', N'Box of 30 Tablets', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'Vietnam', 35)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (24, N'Do not use for people who are sensitive to any ingredient of the product.', N'Take 1 tablet per day, dissolved in a glass of water (200 ml).', N'None', N'Kudos Kids Multivitamins Plus Calcium & D3 watermelon flavor helps supplement essential calcium and vitamins (A, C, D3, E, B1, B2, B3, B5, B6, B8, B9, B12) for the body.', N'Calcium carbonate , Vitamin C , Niacin , Vitamin E , Pantothenic Acid , Vitamin B6 , Vitamin B2 , Vitamin B1 , Vitamin A , Folic Acid , Biotin , Vitamin D3 , Vitamin B12', N'Tube of 20 Tablets', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'Singapore', 36)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (25, N'Do not use for people who are sensitive to any ingredient of the product.', N'Take 1 tablet per day, dissolved in a glass of water (200 ml).', N'None', N'Vitamin C , Ginseng Extract , Niacin , Vitamin E , Pantothenic Acid , Vitamin B2 , Vitamin B6 , Vitamin B1 , Vitamin A , Folic Acid , Biotin , Vitamin D3 , Vitamin B12', N'Kudos Daily Vitamins Plus Biotin & Ginseng orange flavor helps supplement vitamins (A, C, D, E, B1, B2, B3, B5, B6, B8, B9, B12) for the body.', N'Tube of 20 Tablets', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'Singapore', 37)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (26, N'Do not use for people who are sensitive to any ingredient of the product.', N'Take 1 tablet per day, dissolved in a glass of water (200 ml).', N'None', N'Kudos Vitamin C 1000mg supplements vitamin C for the body. The product is suitable for people 14 years and older who need vitamin C supplementation.', N'Vitamin C', N'Tube of 20 Tablets', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'Singapore', 38)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (34, N'Do not use for people who are sensitive to any ingredient of the product.', N'Take 1 tablet per day, dissolved in a glass of water (200 ml).', N'None', N'Kudos Bone Health Calcium, D3 & Vitamin K2 supplements calcium, vitamin K2, vitamin D3 for the body.', N'Calcium carbonate , Vitamin K2 , Cholecalciferol (Vitamin D3)', N'Tube of 20 Tablets', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'Singapore', 39)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (35, N'Do not use for people who are sensitive to any ingredient of the product.', N'Children from 2 years old - 4 years old: Take 5 ml/time/day.', N'None', N'Fer + Multi Hatro syrup supplements iron and B vitamins for the body. Supports increased blood formation ability, helping reduce the risk of iron deficiency anemia. Supports health improvement.', N'Lipofer Na Dispersible , Zinc Gluconate , Vitamin B6 , Vitamin B1 , Vitamin B2 , Folic Acid , Vitamin B12', N'Box x 120ml', N'None', N'There is no information about side effects of the product.', N'Store in a dry, cool place, temperature not exceeding 30 degrees Celsius, away from light.

Keep out of reach of CHILDREN.

', N'Australia', 40)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (36, N'Do not use for people who are sensitive to any ingredient of the product.', N'Children from 2 years old - 4 years old: Take 5 ml/time/day.', N'None', N'Zinc + Lysin Hatro syrup supplements zinc for the body, supports increased resistance, and reduces the risk of zinc deficiency.', N'Lysine hydrochloride , Gluconal ZN-P , Vitamin B12', N'Box x 120ml', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

 Close the lid tightly after use.

 Keep out of reach of CHILDREN.

', N'Australia', 41)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (37, N'Do not use for people who are sensitive to any ingredient of the product.', N'Take 1 pill/day.', N'None', N'Prenatal One provides DHA, essential vitamins and minerals, helping balance nutrition for pregnant and postpartum women.

', N'Folic Acid , Vitamin B6 , Vitamin B5 , Vitamin E , Vitamin B3 , Magnesium , Iron (Ferrous Fumarate) , Vitamin C , Calcium Carbonate , DHA , Vitamin D3
', N'Box of 60 Tablets', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'USA', 42)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (38, N'Do not use for people who are sensitive to any ingredient of the product.', N'Adults take 2 tablets daily after meals or as recommended by a healthcare professional.', N'None', N'Pharma World Calcium K2  supplements calcium and some vitamins and minerals to help strengthen bones, increase the body''s ability to absorb calcium, and help reduce the risk of osteoporosis .

', N'Zinc , Magnesium , Vitamin D3 , Vitamin K2 , Calcium (Ca+)', N'Box of 60 Tablets', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'USA', 43)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (39, N'Do not use for people who are sensitive to any ingredient of the product.', N'Take 1 hour before meals.

 Adults: Take 5ml/time/drink x 2 times/day. 

Children in puberty: Take 5ml/day.', N'None', N'Feginic helps supplement organic iron, helping to reduce the risk of anemia in pregnant women, breastfeeding women, children in puberty, and women during menstruation due to iron deficiency.', N'Iron , Inulin , Folic Acid , Vitamin B12 , Vitamin B6', N'Box of 4 Blisters x 5 Tubes x 5ml', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'Vietnam', 44)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (40, N'Do not use for people who are sensitive to any ingredient of the product.', N'Adults take 1 - 2 tablets daily before or after meals.', N'None', N'Heart ACE Support helps reduce blood cholesterol and is good for the heart.', N'Lecithin , Resveratrol , Fermented Red Rice Powder , Nattokinase , Coenzyme Q10', N'Box of 60 Tablets', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'USA', 45)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (42, N'Do not use for people who are sensitive to any ingredient of the product.', N'Adults take 1 - 2 tablets daily before or after meals.', N'None', N'Omega Plus 10 is anti-oxidant, supports good cardiovascular health and rejuvenates cardiovascular activity.', N'Omega 3 , Coenzyme Q10 , Vitamin E', N'Box of 60 Tablets', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'USA', 46)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (43, N'Do not use for people who are sensitive to any ingredient of the product.', N'Take 1 - 2 tablets per day, before or after meals.', N'None', N'Heart ACE Support supports cardiovascular health, helps reduce blood cholesterol, and stabilizes heart rate.', N'Coenzyme Q10 , Nattokinase , Red Yeast Rice Extract , Resveratrol , Lecithin', N'Box of 30 tablets', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'USA', 47)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (44, N'Do not use for people who are sensitive to any ingredient of the product.', N'Take 2 tablets/day with cold or warm water.', N'None', N'Hato Gold supports a healthy heart, helps reduce shortness of breath, fatigue, and chest pain; helps circulate blood in and out of the heart, reduces blood congestion in the heart', N'Grape , Ginkgo , Maca Extract , Black Sesame , Nattokinase , Vitamin B12 , Vitamin B6 , Vitamin B2 , Vitamin B1 , Eicosapentaenoic acid , Korean ginseng , Magnesium , DHA , Coenzyme Q10', N'Box of 60 Tablets', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'Japan', 48)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (45, N'Do not use for people who are sensitive to any ingredient of the product.', N'Take 2 tablets/day with cold or warm water.', N'None', N'Blood Pressure+++ supports stabilizing and regulating blood pressure, increasing blood flow to the body, enhancing blood circulation to organs.', N'Taurine , Onion Peel Powder , Vitamin B12 , Vitamin B1 , Black Sesame, Fermented Soybean , Magnesium , Black Garlic , Potassium , GABA , Calcium , Maca Extract , Sardine Peptides', N'Box of 60 Tablets', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'Japan', 49)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (46, N'Do not use for people who are sensitive to any ingredient of the product.', N'Take 2 tablets/day with cold or warm water.', N'None', N'CoQ10 supports cardiovascular health, reduces blood cholesterol (in dyslipidemia), helps heart muscle cell respiration. Supports slowing down the aging process and keeps the body healthy.', N'Yellow beeswax , Soybean lecithin oil , Coenzyme Q10 , Sufficient excipients', N'Box of 30 tablets', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'USA', 50)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (47, N'Do not use for people who are sensitive to any ingredient of the product.', N'Adults: Take 1 - 2 tablets/day, with meals.', N'None', N'Cholesterol Aid helps prevent and reduce harmful cholesterol, reduce triglycerides in the blood (blood fat...).', N'Chromium , Cao Tram , Red rice yeast', N'Bottle of 60 tablets
', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'USA', 51)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (48, N'Do not use for people who are sensitive to any ingredient of the product.', N'Adults take 1 - 2 tablets daily after meals or as directed by physicians and nutritionists.', N'None', N'Co-Enzyme Q10 & Evening primrose support the treatment and prevention of cardiovascular diseases, strengthen the immune system, and improve resistance. Supports energy release and prevents the risk of obesity and excess fat in the blood.', N'Sufficient excipients , Vitamin E , Fish oil , Evening primrose essential oil , Coenzyme Q10', N'Box of 30 tablets', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'Vietnam', 52)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (49, N'Do not use for people who are sensitive to any ingredient of the product.', N'Adults take 1 - 2 tablets daily after meals or as directed by physicians and nutritionists.', N'None', N'Active Legs helps enhance blood circulation, increase vein endurance, limit blood clot formation, prevent and support the treatment of varicose veins in the legs, reduce symptoms of leg pain, heavy legs, numb legs, blue veins on legs', N'Black pepper , Grape extract , French pine bark extract , Excipients sufficient , Vitamin C', N'Box of 15 tablets', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'Sweden', 53)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (50, N'Do not use for people who are sensitive to any ingredient of the product.', N'Adults take 1 - 2 tablets daily before or after meals.', N'None', N'Strengthening Limb Veins increases the durability of limb veins, preventing and reducing symptoms of varicose veins.', N'Horse chestnut , Witch hazel , Fish mint , Dan ginseng , Hoe flower , Rose flower , Panax ginseng , Sufficient excipients', N'Box of 6 Blisters x 10 Tablets', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'Vietnam', 54)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (51, N'Do not use for people who are sensitive to any ingredient of the product.', N'Take 4 tablets/day with cold or warm water.', N'None', N'JP Natural Organic Jpanwell pills help supplement vitamins, minerals and fiber for the body. Helps strengthen the digestive system, beautify the skin, prevent constipation and increase the body''s resistance.

', N'Oligosaccharide , Fucoidan , Vitamin B1 , Vitamin C , Vitamin A , Vitamin E , Vitamin B2 , Vitamin B6 , Vitamin B12 , Bifidobacterium BR 108', N'Box of 120 Tablets', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'Japan', 55)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (52, N'Do not use for people who are sensitive to any ingredient of the product.', N'Adults: Take 2 tubes/time. 2 - 4 times a day, 3 hours apart each time.', N'None', N'LiveSpo DIA 30 helps reduce symptoms of acute diarrhea and digestive disorders. Supplementing probiotics in spore form helps support the balance of intestinal microflora.', N'Bacillus coagulans , Bacillus subtilis , Bacillus clausii', N'Box of 2 Blisters x 5 Tubes x 5ml', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'Vietnam', 56)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (53, N'Do not use for people who are sensitive to any ingredient of the product.', N'Children from 6 - 12 years old: Take 15 ml/time, 2 times a day.

Adults and children over 12 years old: Take 15 ml/time, 3 times a day.', N'None', N'Bao Da Phuong Y Nam helps reduce gastric acid and helps protect the stomach lining. Helps reduce the risk of stomach and duodenal ulcers.', N'Hau phap , String tea , Dandelion , Gentian leaves , Uat Kim , Nano Curcumin 5% , Licorice , Magnesium Trisilicate , Dried aluminum hydroxide , Da Cam extract , Extract leaf extract , Aloe vera powder , Mugwort', N'Box of 15 Packets x 15ml', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'Vietnam', 57)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (54, N'Do not use for people who are sensitive to any ingredient of the product.', N'Children 1 - 3 years old: Take 1 packet/time x 2 times/day. Can be mixed in milk, soup or baby food.', N'None', N'Soki Miter helps support digestion, reduce bloating, indigestion, and constipation.', N'Digezyme , Promoter', N'Box of 20 Packets', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'Vietnam', 58)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (55, N'Do not use for people who are sensitive to any ingredient of the product.', N'Children younger than or equal to 6 months old: 1 packet/time x 3 times/day.', N'None', N'Soki Novo supports digestion, helps reduce bloating, flatulence, vomiting, and indigestion. Helps improve resistance and improve health.', N'GOS (Galacto Oligosaccharide) , Green Perilla Extract , Ginger , Hydrolyzed Milk Protein , Lactoferrin , 2''-FL HMO', N'Box of 18 Packets x 3g', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'Vietnam', 59)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (57, N'Do not use for people who are sensitive to any ingredient of the product.', N'Children from 1 - 3 years old: Take 5ml/time x 2 - 3 times/day.

 Children from 4 - 6 years old: Take 10ml/time x 2 times/day.', N'None', N'Ginkid Laxative supplements fiber, helps laxatives reduce constipation, helps good digestion, and supports the development of beneficial intestinal bacteria.', N'Brewer''s yeast essence , Inulin , Fructooligosaccharides , Phan ta Diep', N'Box of 3 Blisters x 5 Tubes x 10ml', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'Vietnam', 60)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (58, N'Do not use for people who are sensitive to any ingredient of the product.', N'Children 1 - 2 years old: Take 5ml/time x 2 times/day.', N'None', N'Ginkid Digestive Enzyme supplements beneficial bacteria in the intestinal tract, helping to reduce the risk of digestive disorders caused by bacterial infections or long-term use of antibiotics.', N'Bacillus clausii', N'Box of 4 Blisters x 5 Tubes x 5ml', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'Vietnam', 61)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (59, N'Do not use for people who are sensitive to any ingredient of the product.', N'Adults: Take 2 - 3 tubes/day.', N'None', N'LiveSpo Clausy supplements probiotics, helping to balance the intestinal microflora. Helps reduce symptoms and risk of digestive disorders caused by intestinal dysbiosis.', N'Bacillus clausii
', N'Box of 25 Tubes x 5ml', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'Vietnam', 62)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (60, N'Do not use for people who are sensitive to any ingredient of the product.', N'Take 1 pill/day with cold or warm water.', N'None', N'Bifido Plus supplements probiotics to enhance colon health; Helps reduce common diseases in the colon. Reduce the risk of digestive disorders , improve symptoms of poor appetite, flatulence, indigestion, bloating and constipation.', N'Soluble fiber , oligosaccharides in milk , Lactic acid bacteria , Bifidobacterium BB536', N'Box of 30 Tablets
', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'Japan', 63)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (61, N'Do not use for people who are sensitive to any ingredient of the product.', N'Take 2 tablets/day with cold or warm water.', N'None', N'Dr.Sto helps reduce symptoms of pain and stomach ulcers. Helps improve symptoms: Bloating, heartburn, indigestion and loss of appetite. Stimulates appetite, good digestion and enhances health.', N'Vitamin B12 , Vitamin B1 , Curcumin , Vitamin B2 , Magnesium carbonate , Malt , Lactoferrin , Papaya , Cereal flour , Brewer''s yeast extract', N'Box of 60 Tablets', N'None', N'There is no information about side effects of the product.', N'Store in a cool, dry place, away from direct sunlight.

Keep out of reach of CHILDREN.

', N'Japan', 64)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (62, N'Do not use for people who are sensitive to any ingredient of the product.', N'Take 2 - 3 tablets per day with water.', N'None', N'Kenkan Kaki Ekisu Tohchukasou supports enhancing male physiology.', N'Maca powder extract , Yeast extract , Cordyceps mushroom extract powder , Oyster meat extract powder', N'Box of 60 Tablets', N'None', N'There is no information about side effects of the product.', N'Store in a dry, cool place, temperature not exceeding 30 degrees Celsius, away from light.

 Keep out of reach of CHILDREN.

', N'Japan', 65)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (63, N'Do not use for people who are sensitive to any ingredient of the product.', N'Take 2 - 3 tablets per day with water.', N'None', N'Kenkan Seishun Primrose supplements evening primrose oil and isoflavones to help improve symptoms of premenopausal and menopausal women such as hot flashes, stress, and anxiety.', N'Additives , Cherry blossom extract powder , Soybean extract , Evening primrose oil', N'Box of 60 Tablets', N'None', N'There is no information about side effects of the product.', N'Store in a dry, cool place, temperature not exceeding 30 degrees Celsius, away from light.

 Keep out of reach of CHILDREN.

', N'Japan', 66)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (64, N'Do not use for people who are sensitive to any ingredient of the product.', N'Take 2 pills/day after meals.', N'None', N'Ironmen is a health protection food that helps enhance male physiology thanks to a combination of herbs. Provides energy and nourishes vitality effectively.', N'Tribulus terrestris extract , Maca Root , L-arginine , Selenium , Zinc , Ginseng , Coenzyme Q10 , Tongkat ali extract liquid', N'Box of 60 Tablets', N'None', N'There is no information about side effects of the product.', N'Store in a dry, cool place, temperature not exceeding 30 degrees Celsius, away from light.

 Keep out of reach of CHILDREN.

', N'Bulgaria', 67)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (65, N'Do not use for people who are sensitive to any ingredient of the product.', N'Take 2 tablets/day with cold or warm water.', N'None', N'JP Lady provides essential vitamins and nutrients for premenopausal women. Helps improve health for premenopausal women.', N'Glucosamine , Soybean isoflavones , pig placenta extract , Resveratrol , Hypericum perforatum flowering top , Fish Collagen , Chondroitin , GABA , Korean ginseng , fermented plant ', N'Box of 60 Tablets', N'None', N'There is no information about side effects of the product.', N'Store in a dry, cool place, temperature not exceeding 30 degrees Celsius, away from light.

 Keep out of reach of CHILDREN.

', N'Japan', 68)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (66, N'Do not use for people who are sensitive to any ingredient of the product.', N'Take 2 tablets/day, during or immediately after meals.', N'None', N'Léana Ocavill supports hormonal balance. Supports improvement of premenopausal and menopausal symptoms due to hormonal decline. Supports limiting the aging process, helping to beautify the skin.', N'Evening primrose essential oil , Vitamin E , Ginseng , Lepidium meyenii , Virgin Mary', N'Box of 60 Tablets', N'None', N'There is no information about side effects of the product.', N'Store in a dry, cool place, temperature not exceeding 30 degrees Celsius, away from light.

 Keep out of reach of CHILDREN.

', N'Bulgaria', 69)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (67, N'Do not use for people who are sensitive to any ingredient of the product.', N'Take 2 tablets daily with meals or as advised by a healthcare professional.', N'None', N'Vitatree Oyster Extract male enhancement pills help support the maintenance of reproductive health for men.', N'Oyster shell , Zinc citrate', N'Box of 90 tablets', N'None', N'There is no information about side effects of the product.', N'Store in a dry, cool place, temperature not exceeding 30 degrees Celsius, away from light.

 Keep out of reach of CHILDREN.

', N'Australia', 70)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (68, N'Do not use for people who are sensitive to any ingredient of the product.', N'Take 1 - 2 tablets per day after meals.', N'None', N'Vitatree Essence Of Kangaroo men''s health enhancing pills help supplement amino acids, helping to improve health.', N'Kangaroo', N'Box of 100 tablets', N'None', N'There is no information about side effects of the product.', N'Store in a dry, cool place, temperature not exceeding 30 degrees Celsius, away from light.

 Keep out of reach of CHILDREN.

', N'Australia', 71)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (69, N'Do not use for people who are sensitive to any ingredient of the product.', N'Take 1 - 2 pills each time, twice a day.', N'None', N'To Nu Vuong helps improve female hormones, reduces symptoms of hot flashes, insomnia, skin darkening, and erectile dysfunction due to female hormone decline.', N'Soybean sprouts , Evening primrose , Collagen peptide , Acerola , Vitamin E , Pueraria mirifica , Bach dahlias, Xuyen giang , Dong quai , Thuc dich', N'Box of 30 Tablets', N'None', N'There is no information about side effects of the product.', N'Store in a dry, cool place, temperature not exceeding 30 degrees Celsius, away from light.

 Keep out of reach of CHILDREN.

', N'Vietnam', 72)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (70, N'Do not use for people who are sensitive to any ingredient of the product.', N'Take 2 pills each time, 2-3 times a day.', N'None', N'Vuong Nu Khang helps limit the development of uterine fibroids and benign breast tumors in women.', N'Crinum latifolium , Astragalus , Astragalus , Panax notoginseng , Curcumin , Betaglucan , Papain', N'Box of 60 Tablets', N'None', N'There is no information about side effects of the product.', N'Store in a dry, cool place, temperature not exceeding 30 degrees Celsius, away from light.

 Keep out of reach of CHILDREN.

', N'Vietnam', 73)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (71, N'Do not use for people who are sensitive to any ingredient of the product.', N'Supports skin care and anti-aging: Take 1 pill x 2 times/day.', N'None', N'Onagre supports the treatment of premenstrual and menopausal symptoms, while nourishing the skin, fighting the aging process of cells, helping to maintain and improve the youthfulness and beauty of the skin.', N'Sufficient excipients , Capsule envelop , Glycerin , Bovin gelatin , Vitamin E , Evening primrose essential oil', N'Box of 60 Tablets', N'None', N'There is no information about side effects of the product.', N'Store in a dry, cool place, temperature not exceeding 30 degrees Celsius, away from light.

 Keep out of reach of CHILDREN.

', N'France', 74)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (72, N'Do not use for people who are sensitive to any ingredient of the product.', N'Adults: Take 1 tablet/day, with meals or as directed by your doctor.', N'None', N'Via Him Lab Well helps improve health, increase vitality and physiological ability in men.', N'American ginseng , Korean ginseng , Oysters , Oats , Ginkgo biloba , muira puama , Peruvian ginseng , Yohimbe , Tribulus terrestris , Calcium', N'Box of 30 Tablets', N'None', N'There is no information about side effects of the product.', N'Store in a dry, cool place, temperature not exceeding 30 degrees Celsius, away from light.

 Keep out of reach of CHILDREN.

', N'USA', 75)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (73, N'Do not use for people who are sensitive to any ingredient of the product.', N'Take twice a day, morning and afternoon, 2 pills each time.', N'None', N'NV Kidney Nourishing Velvet Ginseng helps tonify the kidneys, strengthen virility, strengthen tendons and bones, eat and sleep well, increase vitality, help reduce male menopause, erectile dysfunction, back pain, and knee fatigue.', N'Nhung Deer , Cao Ban Long , Dam Duong Hoac , Far Chi , Du Trong , Dang Sam , Xuyen Khuong , Trach Ta , Cau Ti , Rabbit Ty Tu , Man Sam , Duong Quy , Bach Linh , Tuc Duan', N'Box of 30 Tablets', N'None', N'There is no information about side effects of the product.', N'Store in a dry, cool place, temperature not exceeding 30 degrees Celsius, away from light.

 Keep out of reach of CHILDREN.

', N'Vietnam', 76)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (74, N'Do not use for people who are sensitive to any ingredient of the product.', N'Take 2 - 4 tablets/day with warm or cold water.', N'None', N'Best King JpanWell pills support physiological enhancement and enhance fertility in men. Helps reduce premature menopause in men.', N'L-Carnitine , Tongkat ali , Ginger Powder , Selenium , L-Citrulline , Macca , Folic Acid , Zinc , Sufficient Excipients , Coenzyme Q10 , Oyster Extract', N'Box of 60 Tablets', N'None', N'There is no information about side effects of the product.', N'Store in a dry, cool place, temperature not exceeding 30 degrees Celsius, away from light.

 Keep out of reach of CHILDREN.

', N'Japan', 77)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (75, N'Do not use for people who are sensitive to any ingredient of the product.', N'Take 2 tablets daily, divided into 2 times before or after lunch and dinner. ', N'None', N'Maca F Female Empower supports enhancing female hormones, helping to increase female physiological ability.

', N'maca root extract , Dong Quai , Sufficient excipients , Common Wild Yam', N'Box of 60 Tablets', N'None', N'There is no information about side effects of the product.', N'Store in a dry, cool place, temperature not exceeding 30 degrees Celsius, away from light.

 Keep out of reach of CHILDREN.

', N'USA', 78)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (76, N'Do not use for people who are sensitive to any ingredient of the product.', N'Take 2 times a day, 1 pill each time, preferably after lunch and dinner. ', N'None', N'Maca M Male Power supports kidney health, virility, and enhances male physiological ability.', N'maca root extract , American Ginseng , Angelica Root , Radix Polygalae-root , Fructus Alpiniae Oxyphyllae , Cortex Eucommiae , Radix Achryanthis Bidentatae , Fructus Amomi , Rhizoma Ligustici Chuanxiong , Radix Dipsaci', N'Box of 60 Tablets', N'None', N'There is no information about side effects of the product.', N'Store in a dry, cool place, temperature not exceeding 30 degrees Celsius, away from light.

 Keep out of reach of CHILDREN.

', N'USA', 79)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (77, N'Do not use for people who are sensitive to any ingredient of the product.', N'Tear the packaging and take it out gently.

 Wear a condom when the penis is erect.

 After use, tie a knot and throw in the trash.', N'None', N'Okamoto 0.03 Platinum condoms have a modern, tight, snug and ultra-thin design. With natural rubber ingredients and water-based lubricants, the product meets strict production requirements and conditions, ensuring maximum safety for users.', N'Natural rubber', N'Box of 3 Pieces', N'None', N'There is no information about side effects of the product.', N'Leave in a cool, dry place. Avoid direct light.

', N'Japan', 80)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (78, N'Do not use for people who are sensitive to any ingredient of the product.', N'Tear the packaging and take it out gently.

 Wear a condom when the penis is erect.

 After use, tie a knot and throw in the trash.', N'None', N'Okamoto Crown condoms have a modern design, tight-fitting, super thin and soft. With natural rubber ingredients and water-based lubricants, the product meets strict production requirements and conditions, ensuring maximum safety for users.

', N'Natural rubber', N'Box of 10 Pieces', N'None', N'There is no information about side effects of the product.', N'Leave in a cool, dry place. Avoid direct light.

', N'Japan', 81)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (79, N'Do not use for people who are sensitive to any ingredient of the product.', N'Tear the packaging and take it out gently.

 Wear a condom when the penis is erect.

 After use, tie a knot and throw in the trash.', N'None', N'Okamoto Crown condoms have a modern, tight-fitting, ultra-thin design. With natural rubber ingredients and water-based lubricants, the product meets strict production requirements and conditions, ensuring maximum safety for users.', N'Natural rubber', N'Box of 3 Pieces', N'None', N'There is no information about side effects of the product.', N'Leave in a cool, dry place. Avoid direct light.

', N'Japan', 82)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (80, N'Do not use for people who are sensitive to any ingredient of the product.', N'Tear the packaging and take it out gently.

 Wear a condom when the penis is erect.

 After use, tie a knot and throw in the trash.', N'None', N'Okamoto Skinless Skin Purity condoms have a tight, snug and ultra-thin design. With natural rubber ingredients and water-based lubricants, the product meets strict production requirements and conditions, ensuring maximum safety for users.', N'Natural rubber', N'Box of 10 Pieces', N'None', N'There is no information about side effects of the product.', N'Leave in a cool, dry place. Avoid direct light.

', N'Japan', 83)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (81, N'Do not use for people who are sensitive to any ingredient of the product.', N'Tear the packaging and take it out gently.

 Wear a condom when the penis is erect.

 After use, tie a knot and throw in the trash.', N'None', N'Okamoto Skinless Skin Purity condoms have a tight, snug and ultra-thin design. With natural rubber ingredients and water-based lubricants, the product meets strict production requirements and conditions, ensuring maximum safety for users.', N'Natural rubber', N'Box of 3 Pieces', N'None', N'There is no information about side effects of the product.', N'Leave in a cool, dry place. Avoid direct light.

', N'Japan', 84)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (82, N'Do not use for people who are sensitive to any ingredient of the product.', N'Tear the packaging and take it out gently.

 Wear a condom when the penis is erect.

 After use, tie a knot and throw in the trash.', N'None', N'Sagami Classic condoms are super thin in size, supplemented with lots of lubricating gel, and have no unpleasant odor. Using condoms correctly is an effective way to prevent pregnancy and sexually transmitted diseases.

', N'Natural rubber', N'Box of 12 Pieces', N'None', N'There is no information about side effects of the product.', N'Leave in a cool, dry place. Avoid direct light.

', N'Japan', 85)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (83, N'Do not use for people who are sensitive to any ingredient of the product.', N'Tear the packaging and take it out gently.

 Wear a condom when the penis is erect.

 After use, tie a knot and throw in the trash.', N'None', N'Sagami 0.01mm condoms have "peak" thinness and the ability to transmit heat quickly, giving the couple more sublimation. Using condoms correctly is an effective way to prevent pregnancy and sexually transmitted diseases.', N'Natural rubber', N'Box of 1 Pieces', N'None', N'There is no information about side effects of the product.', N'Leave in a cool, dry place. Avoid direct light.

', N'Japan', 86)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (84, N'Do not use for people who are sensitive to any ingredient of the product.', N'Tear the packaging and take it out gently.

 Wear a condom when the penis is erect.

 After use, tie a knot and throw in the trash.', N'None', N'Sagami Love Me Gold condoms are super thin, smooth and colorless and odorless, bringing a pleasant and sublime feeling to the couple. Using condoms correctly helps prevent pregnancy and sexually transmitted diseases effectively.', N'Natural rubber', N'Box of 10 Pieces', N'None', N'There is no information about side effects of the product.', N'Leave in a cool, dry place. Avoid direct light.

', N'Japan', 87)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (85, N'Do not use for people who are sensitive to any ingredient of the product.', N'Tear the packaging and take it out gently.

 Wear a condom when the penis is erect.

 After use, tie a knot and throw in the trash.', N'None', N'Safefit Freezer Max S52 condoms are a Vietnamese brand product, suitable for Vietnamese people. The product contains many cooling gels, creating refreshment and comfort', N'Natural rubber', N'Box of 10 Pieces', N'None', N'There is no information about side effects of the product.', N'Leave in a cool, dry place. Avoid direct light.

', N'Vietnam', 88)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (86, N'Do not use for people who are sensitive to any ingredient of the product.', N'Tear the packaging and take it out gently.

 Wear a condom when the penis is erect.

 After use, tie a knot and throw in the trash.', N'None', N'Safefit Freezer Max S52 condoms are a Vietnamese brand product, suitable for Vietnamese people. The product contains many cooling gels, creating refreshment and comfort', N'Natural rubber', N'Box of 3 Pieces', N'None', N'There is no information about side effects of the product.', N'Leave in a cool, dry place. Avoid direct light.

', N'Vietnam', 89)
INSERT [dbo].[product_detail] ([detail_id], [p_contraindications], [p_dosage_and_usage], [p_drug_interactions], [p_indications], [p_ingredients], [p_packaging], [p_precautions], [p_side_effects], [p_storage], [p_made_in], [product_id]) VALUES (87, N'Do not use for people who are sensitive to any ingredient of the product.', N'Tear the packaging and take it out gently.

 Wear a condom when the penis is erect.

 After use, tie a knot and throw in the trash.', N'None', N'Safefit 003 S52 condoms are Vietnamese brand products, suitable for Vietnamese people. The product has an ultra-thin feature, helping to transfer heat quickly, bringing the most realistic feeling.', N'Natural rubber', N'Box of 12 pieces', N'None', N'There is no information about side effects of the product.', N'Leave in a cool, dry place. Avoid direct light.

', N'Vietnam', 90)
SET IDENTITY_INSERT [dbo].[product_detail] OFF
GO
SET IDENTITY_INSERT [dbo].[product_image] ON 

INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (6, N'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00032917_vien_uong_giup_ngu_ngon_an_than_gaba_jpanwell_60v_8292_61a5_large_ee00cb0747.JPG', 17)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (7, N'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00029140_euro_ginko_gold_hdpharma_100v_5431_63a9_large_07698181e4.jpg', 19)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (8, N'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00029173_melisa_dream_new_nordic_40v_9861_62b1_large_39fd14c6b5.jpg', 27)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (9, N'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00032348_trung_thao_gold_30v_4153_63a9_large_543ae22562.jpg', 28)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (10, N'https://cdn.nhathuoclongchau.com.vn/unsafe/636x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00032465_siro_giup_be_ngu_ngon_special_kid_sommeil_eric_favre_125ml_4792_62ae_large_64008022f1.jpg', 29)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (11, N'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_03745_c42f8db053.jpg', 30)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (12, N'https://botania.com.vn/upload/files/San-pham/San-pham-BoniSleep-3D.jpg', 31)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (13, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/DSC_00507_429b55cc3c.jpg', 32)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (15, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09581_5712979ba0.jpg', 35)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (16, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09365_33ea32b9d1.jpg', 36)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (17, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09335_24b9811179.jpg', 37)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (18, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09324_db795e136a.jpg', 38)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (19, N'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09344_b38a024079.jpg', 39)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (20, N'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_08324_453bb032ed.jpg', 40)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (21, N'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_08313_1efe9a74d1.jpg', 41)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (22, N'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_00115_72e83dcffe.jpg', 42)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (23, N'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00503275_vien_uong_bo_sung_canxi_giam_nguy_co_loang_xuong_pharma_word_calci_k_2_60v_2299_63ed_large_322e824179.jpg', 43)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (24, N'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501604_ong_uong_bo_sung_sat_feginic_4x5_ong_5ml_7086_62f9_large_b9aea30e80.jpg', 44)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (25, N'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00502890_vien_uong_ho_tro_tim_mach_heart_ace_support_vitamins_for_life_60v_9614_63aa_large_4d1c0cdff6.jpg', 45)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (26, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00033383_vien_uong_ho_tro_tim_mach_omega_plus_10_vitamins_for_life_60v_1049_620b_large_51c80bec0e.jpg', 46)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (27, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00033382_vien_uong_ho_tro_tim_mach_heart_ace_support_vitamins_for_life_30v_9384_63e1_large_9a7ec569a1.jpg', 47)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (28, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00032923_vien_uong_cai_thien_tim_mach_hato_gold_jpanwell_60v_8446_61aa_large_da46bcb91d.jpg', 48)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (29, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00032919_vien_uong_ho_tro_huyet_ap_blood_pressure_jpanwell_60v_2806_61aa_large_085443011e.jpg', 49)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (30, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00345343_coq10_my_vien_uong_bo_tim_mach_2605_5c45_large_985993d8bd.jpg', 50)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (31, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00345418_cholesterol_aid_ho_tro_giam_cholesterol_1929_63e1_large_9655044105.jpg', 51)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (32, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00002003_co_enzyme_q10_ho_tro_dieu_tri_tim_mach_8101_5d7f_large_09c6666db9.JPG', 52)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (33, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00020313_active_legs_15v_thien_minh_3051_6327_large_96908d2f5e.jpg', 53)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (34, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00028711_vung_mach_chi_kingphar_6x10_9097_6327_large_e89461d713.jpg', 54)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (35, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00503498_vien_uong_rau_cu_bo_sung_chat_xo_chong_tao_bon_va_tang_de_khang_jp_natural_organic_120v_9746_6401_large_8818e807f3.jpg', 55)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (36, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00502653_livespo_dia_30_10_ong_x_5ml_bao_tu_loi_khuan_cho_nguoi_tieu_chay_roi_loan_tieu_hoa_6463_6376_large_16d30e8870.jpg', 56)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (37, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00502320_bao_da_phuong_y_nam_ho_tro_giam_viem_loet_da_day_ta_trang_15_goi_x_15ml_5610_6372_large_bd29697b80.jpg', 57)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (38, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00501624_soki_miter_20_goi_7086_62fb_large_b763f7ad9b.jpg', 58)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (39, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00501620_soki_novo_18_goi_x_3g_1361_62fb_large_b2ca63e502.jpg', 59)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (40, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00501601_ginkid_nhuan_trang_bo_sung_chat_xo_3x5_ong_10ml_2374_62f9_large_baf2c439a9.jpg', 60)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (41, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00501598_ginkid_men_tieu_hoa_4x5_ong_5ml_3251_62f9_large_fee78b2a80.jpg', 61)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (42, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00501425_livespo_clausy_25_ong_x_5ml_bao_tu_loi_khuan_khang_da_khang_sinh_1688_62fe_large_f3112fbc53.jpg', 62)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (43, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00033284_vien_uong_ho_tro_dai_trang_bifido_plus_jpanwell_30v_5543_61e9_large_9d369d6c67.jpg', 63)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (44, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00032922_vien_uong_ho_tro_da_day_dr_sto_jpanwell_60v_9829_61aa_large_795f1629a2.jpg', 64)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (45, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00502603_vien_uong_tang_cuong_chuc_nang_sinh_ly_nam_kenkan_kaki_ekisu_tohchukasou_60v_3488_6371_large_7c3a87ff1d.jpg', 65)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (46, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00502210_vien_uong_bo_sung_dau_hoa_anh_thao_cho_phu_nu_tien_man_kinh_kenkan_seishun_primrose_60v_5885_6334_large_f92ec17740.jpg', 66)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (47, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00501597_vien_uong_tang_cuong_sinh_ly_ironmen_ocavill_60v_5022_6302_large_3cb863cf94.jpg', 67)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (48, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00500358_vien_uong_ho_tro_phu_nu_tien_man_kinh_jp_lady_jpanwell_60v_7894_6298_large_f61fb95ace.jpg', 68)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (49, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00500122_vien_uong_ho_tro_can_bang_noi_tiet_to_leana_ocavill_60v_7335_628b_large_f28d3d0fc2.jpg', 69)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (50, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00033670_vien_uong_tang_cuong_sinh_ly_nam_gioi_vitatree_oyster_extract_90v_5060_623c_large_26f8f5404d.jpg', 70)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (51, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00033668_vien_uong_tang_cuong_suc_khoe_nam_gioi_vitatree_essence_of_kangaroo_40000_max_100v_9977_623c_large_2f0749a6b2.jpg', 71)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (52, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00033126_to_nu_vuong_royal_care_30v_8924_61d6_large_a334a3c60f.jpg', 72)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (54, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00032785_vuong_nu_khang_royal_care_60v_5656_61aa_large_7ec72e2f67.jpg', 73)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (55, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00345375_onagre_ho_tro_sinh_ly_nu_tien_man_kinh_5248_5f7e_large_c0ad1df7d2.JPG', 74)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (56, N'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_08401_50aa5b0410.jpg', 75)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (57, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3754_319065b5fe.jpg', 76)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (62, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00021931_best_king_jpanwell_60v_5419_5f92_large_ebf4650be2.JPG', 77)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (63, N'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00028719_maca_f_female_empower_60v_1127_5f62_large_1cfb41e9b6.JPG', 78)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (66, N'https://cdn.nhathuoclongchau.com.vn/unsafe/373x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00028718_maca_m_male_power_60v_7335_5f62_large_ee96a5fd36.JPG', 79)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (67, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09679_b3900eaabc.jpg', 80)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (68, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09728_0364c338ed.jpg', 81)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (69, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09707_b7893a5b10.jpg', 82)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (70, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09717_4be191b823.jpg', 83)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (71, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09694_08ef78d478.jpg', 84)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (72, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00503158_bcs_sagami_classic_sieu_mong_nhieu_gel_boi_tron_mau_da_khong_mui_12_cai_1445_63d7_large_84cbe583d1.jpg', 85)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (73, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00503157_bcs_sagami_001mm_sieu_mong_cham_dinh_chan_that_khong_mau_khong_mui_khong_kich_ung_1_cai_7839_63d7_large_e4011c4064.jpg', 86)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (74, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00503128_bao_cao_su_sagami_love_me_gold_vay_tu_y_te_ha_noi_hop_10_cai_6824_63d7_large_7280123f66.jpg', 87)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (75, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00500214_bcs_safefit_freezer_max_s52_10_cai_gel_mat_lanh_sang_khoai_4720_62c3_large_e8e95d5859.jpg', 88)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (76, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00500213_bcs_safefit_freezer_max_s52_3_cai_gel_mat_lanh_sang_khoai_6230_62c3_large_86dfa6dafe.jpg', 89)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (77, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00500212_bcs_safefit_003_s52_12_cai_sieu_mong_nhieu_silicon_1363_62c3_large_e1b8bdcfe7.jpg', 90)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (79, N'https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/00016683_sonno_30ml_pharmalife_6734_637b_large_8d7016f056.jpg', 34)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (99, N'dcebf5176681857.64c9300425c60 - Copy.jpg', 16)
INSERT [dbo].[product_image] ([image_id], [image_url], [product_id]) VALUES (100, N'DSC01218.JPG', 16)
SET IDENTITY_INSERT [dbo].[product_image] OFF
GO
SET IDENTITY_INSERT [dbo].[role] ON 

INSERT [dbo].[role] ([role_id], [role_name]) VALUES (1, N'admin')
SET IDENTITY_INSERT [dbo].[role] OFF
GO
SET IDENTITY_INSERT [dbo].[transaction_table] ON 

INSERT [dbo].[transaction_table] ([id], [address], [amount], [delivery_method], [name], [note], [payment_method], [phone], [status]) VALUES (1, N'An Luong, Xã Ch? Ð?o, Huy?n Van Lâm, T?nh Hung Yên.', 264000, N'delivery', N'Trieu tran', N'', N'VNPay', N'0789458707', N'Successfully')
INSERT [dbo].[transaction_table] ([id], [address], [amount], [delivery_method], [name], [note], [payment_method], [phone], [status]) VALUES (2, N'An Luong, Xã Ch? Ð?o, Huy?n Van Lâm, T?nh Hung Yên.', 264000, N'delivery', N'Trieu tran', N'', N'VNPay', N'0789458707', N'Successfully')
INSERT [dbo].[transaction_table] ([id], [address], [amount], [delivery_method], [name], [note], [payment_method], [phone], [status]) VALUES (3, N'An Luong, Xã Ch? Ð?o, Huy?n Van Lâm, T?nh Hung Yên.', 264000, N'delivery', N'Trieu tran', N'', N'VNPay', N'0789458707', N'Successfully')
SET IDENTITY_INSERT [dbo].[transaction_table] OFF
GO
