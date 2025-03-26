const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"教师管理",
			            "menuJump":"列表",
			            "tableName":"jiaoshi"
			        },
					{
					    "buttons":[
					        "查看",
					        "审核",
					        "删除"
					    ],
					    "menu":"请假申请管理",
					    "menuJump":"列表",
					    "tableName":"jiaoshiQingjia"
					},
					{
					    "buttons":[
					        "查看",
					        "审核",
					        "删除"
					    ],
					    "menu":"离职申请管理",
					    "menuJump":"列表",
					    "tableName":"jiaoshiLizhi"
					}
			    ],
			    "menu":"人事管理"
			}
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"办公室管理",
                        "menuJump":"列表",
                        "tableName":"bangongshi"
                    },
					{
					    "buttons":[
					        "查看",
					        "审核",
					        "删除"
					    ],
					    "menu":"办公室申请管理",
					    "menuJump":"列表",
					    "tableName":"bangongshiShenqing"
					},
					{
					    "buttons":[
					        "查看",
					        "新增",
					        "修改",
					        "删除"
					    ],
					    "menu":"办公物资管理",
					    "menuJump":"列表",
					    "tableName":"bangongwuzi"
					},
					{
					    "buttons":[
					        "查看",
					        "审核",
					        "删除"
					    ],
					    "menu":"办公物资申请管理",
					    "menuJump":"列表",
					    "tableName":"bangongwuziShenqing"
					}
                ],
                "menu":"物资管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"会议室管理",
                        "menuJump":"列表",
                        "tableName":"huiyishi"
                    },
					{
					    "buttons":[
					        "查看",
					        "审核",
					        "新增",
					        "修改",
					        "删除"
					    ],
					    "menu":"会议室申请管理",
					    "menuJump":"列表",
					    "tableName":"huiyishiShenqing"
					}
                ],
                "menu":"会议管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"印章管理",
                        "menuJump":"列表",
                        "tableName":"yinzhang"
                    },
					{
					    "buttons":[
					        "查看",
					        "审核",
					        "删除"
					    ],
					    "menu":"印章申请管理",
					    "menuJump":"列表",
					    "tableName":"yinzhangShenqing"
					},
					{
					    "buttons":[
					        "查看",
					        "审核",
					        "删除"
					    ],
					    "menu":"印章添加申请管理",
					    "menuJump":"列表",
					    "tableName":"yinzhangaddShenqing"
					}
                ],
                "menu":"印章管理"
            }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"办公物资类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryBangongwuzi"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"会议室类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryHuiyishi"
			        }
			    ],
			    "menu":"基础数据管理"
			}
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
	{
	    "backMenu":[
	        {
			    "child":[
					{
					    "buttons":[
					        "查看",
                            "新增"
					    ],
					    "menu":"请假申请管理",
					    "menuJump":"列表",
					    "tableName":"jiaoshiQingjia"
					},
					{
					    "buttons":[
					        "查看",
                            "新增"
					    ],
					    "menu":"离职申请管理",
					    "menuJump":"列表",
					    "tableName":"jiaoshiLizhi"
					}
			    ],
			    "menu":"人事管理"
			}
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "申请"
	                    ],
	                    "menu":"办公室管理",
	                    "menuJump":"列表",
	                    "tableName":"bangongshi"
	                },
					{
					    "buttons":[
					        "查看"
					    ],
					    "menu":"办公室申请管理",
					    "menuJump":"列表",
					    "tableName":"bangongshiShenqing"
					},
					{
					    "buttons":[
					        "查看",
	                        "申请"
					    ],
					    "menu":"办公物资管理",
					    "menuJump":"列表",
					    "tableName":"bangongwuzi"
					},
					{
					    "buttons":[
					        "查看"
					    ],
					    "menu":"办公物资申请管理",
					    "menuJump":"列表",
					    "tableName":"bangongwuziShenqing"
					}
	            ],
	            "menu":"物资管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "申请"
	                    ],
	                    "menu":"会议室管理",
	                    "menuJump":"列表",
	                    "tableName":"huiyishi"
	                },
					{
					    "buttons":[
					        "查看"
	                    ],
					    "menu":"会议室申请管理",
					    "menuJump":"列表",
					    "tableName":"huiyishiShenqing"
					}
	            ],
	            "menu":"会议管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "申请"
	                    ],
	                    "menu":"印章管理",
	                    "menuJump":"列表",
	                    "tableName":"yinzhang"
	                },
					{
					    "buttons":[
					        "查看"
					    ],
					    "menu":"印章申请管理",
					    "menuJump":"列表",
					    "tableName":"yinzhangShenqing"
					},
					{
					    "buttons":[
					        "新增",
					        "查看"
					    ],
					    "menu":"印章添加申请管理",
					    "menuJump":"列表",
					    "tableName":"yinzhangaddShenqing"
					}
	            ],
	            "menu":"印章管理"
	        }
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"教师",
	    "tableName":"jiaoshi"
	}
]
    }
}
export default menu;
