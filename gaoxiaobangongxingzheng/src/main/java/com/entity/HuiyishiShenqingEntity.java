package com.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.beanutils.BeanUtils;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.enums.FieldFill;
import com.baomidou.mybatisplus.enums.IdType;

/**
 * 会议室申请
 *
 * @author 
 * @email
 */
@TableName("huiyishi_shenqing")
public class HuiyishiShenqingEntity<T> implements Serializable {
    private static final long serialVersionUID = 1L;


	public HuiyishiShenqingEntity() {

	}

	public HuiyishiShenqingEntity(T t) {
		try {
			BeanUtils.copyProperties(this, t);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}


    /**
     * 主键
     */
    @TableId(type = IdType.AUTO)
    @TableField(value = "id")

    private Integer id;


    /**
     * 申请教师
     */
    @TableField(value = "jiaoshi_id")

    private Integer jiaoshiId;


    /**
     * 申请办公物资
     */
    @TableField(value = "huiyishi_id")

    private Integer huiyishiId;


    /**
     * 申请时间
     */
    @JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
    @TableField(value = "insert_time",fill = FieldFill.INSERT)

    private Date insertTime;


    /**
     * 申请结果
     */
    @TableField(value = "huiyishi_shenqing_yesno_types")

    private Integer huiyishiShenqingYesnoTypes;


    /**
     * 创建时间
     */
    @JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
    @TableField(value = "create_time",fill = FieldFill.INSERT)

    private Date createTime;


    /**
	 * 设置：主键
	 */
    public Integer getId() {
        return id;
    }


    /**
	 * 获取：主键
	 */

    public void setId(Integer id) {
        this.id = id;
    }
    /**
	 * 设置：申请教师
	 */
    public Integer getJiaoshiId() {
        return jiaoshiId;
    }


    /**
	 * 获取：申请教师
	 */

    public void setJiaoshiId(Integer jiaoshiId) {
        this.jiaoshiId = jiaoshiId;
    }
    /**
	 * 设置：申请办公物资
	 */
    public Integer getHuiyishiId() {
        return huiyishiId;
    }


    /**
	 * 获取：申请办公物资
	 */

    public void setHuiyishiId(Integer huiyishiId) {
        this.huiyishiId = huiyishiId;
    }
    /**
	 * 设置：申请时间
	 */
    public Date getInsertTime() {
        return insertTime;
    }


    /**
	 * 获取：申请时间
	 */

    public void setInsertTime(Date insertTime) {
        this.insertTime = insertTime;
    }
    /**
	 * 设置：申请结果
	 */
    public Integer getHuiyishiShenqingYesnoTypes() {
        return huiyishiShenqingYesnoTypes;
    }


    /**
	 * 获取：申请结果
	 */

    public void setHuiyishiShenqingYesnoTypes(Integer huiyishiShenqingYesnoTypes) {
        this.huiyishiShenqingYesnoTypes = huiyishiShenqingYesnoTypes;
    }
    /**
	 * 设置：创建时间
	 */
    public Date getCreateTime() {
        return createTime;
    }


    /**
	 * 获取：创建时间
	 */

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    @Override
    public String toString() {
        return "HuiyishiShenqing{" +
            "id=" + id +
            ", jiaoshiId=" + jiaoshiId +
            ", huiyishiId=" + huiyishiId +
            ", insertTime=" + insertTime +
            ", huiyishiShenqingYesnoTypes=" + huiyishiShenqingYesnoTypes +
            ", createTime=" + createTime +
        "}";
    }
}
