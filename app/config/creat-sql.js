
// 内容表
// create table `first_test`(
//     `id` int(10) not null AUTO_INCREMENT comment '动态id',
//     `title` varchar(20) not null comment '发送标题',
//     `desc` varchar(500) not null comment '描述',
//     `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
//     `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
//     PRIMARY KEY (`id`)
//   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='动态表';


// 评论表
// create table `reply_table`(
//   `id` bigint(20) unsigned not null AUTO_INCREMENT comment '评论id',
//   `content_id` int(10) unsigned not null DEFAULT '0' comment '动态id',
//   `reply_id` bigint(20) unsigned not null DEFAULT '0' comment '回复id',
//   `content` varchar(500) not null comment '评论内容',
//   `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
//   `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='评论表';