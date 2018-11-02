<template>
    <div class="right_col" role="main">
        <div class="row">
            <div class="col-xs-12 x_title">
                <h3>添加新的笔记本商品</h3>
            </div>
        </div>
        <form id="form-product" class="form-horizontal">
            <div class="form-group">
                <div class="col-sm-2">
                    <label class="control-label" for="title">主标题：</label>
                </div>
                <div class="col-sm-5">
                    <input type="text" class="form-control" id="title">
                </div>
                <div class="col-sm-5 help-block">商品主标题不能超过128个字符</div>
            </div>
            <div class="form-group">
                <div class="col-sm-2">
                    <label class="control-label" for="subtitle">副标题：</label>
                </div>
                <div class="col-sm-5">
                    <input type="text" class="form-control" id="subtitle">
                </div>
                <div class="col-sm-5 help-block">商品副标题不能超过128个字符</div>
            </div>
            <div class="form-group">
                <div class="col-sm-2">
                    <label class="control-label" for="price">单价：</label>
                </div>
                <div class="col-sm-5">
                    <input type="text" class="form-control" id="price">
                </div>
                <div class="col-sm-5 help-block">商品单价最多有两位小数位</div>
            </div>
            <div class="form-group">
                <div class="col-sm-2">
                    <label class="control-label" for="promise">服务承诺：</label>
                </div>
                <div class="col-sm-5">
                    <input type="text" class="form-control" id="promise">
                </div>
                <div class="col-sm-5 help-block"></div>
            </div>
            <div class="form-group">
                <div class="col-sm-2">
                    <label class="control-label" for="spec">规格：</label>
                </div>
                <div class="col-sm-5">
                    <input type="text" class="form-control" id="spec">
                </div>
                <div class="col-sm-5 help-block"></div>
            </div>
            <div class="form-group">
                <div class="col-sm-2">
                    <label class="control-label" for="lname">商品名称：</label>
                </div>
                <div class="col-sm-5">
                    <input type="text" class="form-control" id="lname">
                </div>
                <div class="col-sm-5 help-block"></div>
            </div>
            <div class="form-group">
                <div class="col-sm-2">
                    <label class="control-label" for="os">操作系统：</label>
                </div>
                <div class="col-sm-5">
                    <input type="text" class="form-control" id="os">
                </div>
                <div class="col-sm-5 help-block"></div>
            </div>
            <div class="form-group">
                <div class="col-sm-2">
                    <label class="control-label" for="memory">内存容量：</label>
                </div>
                <div class="col-sm-5">
                    <input type="text" class="form-control" id="memory">
                </div>
                <div class="col-sm-5 help-block"></div>
            </div>
            <div class="form-group">
                <div class="col-sm-2">
                    <label class="control-label" for="resolution">分辨率：</label>
                </div>
                <div class="col-sm-5">
                    <input type="text" class="form-control" id="resolution">
                </div>
                <div class="col-sm-5 help-block"></div>
            </div>
            <div class="form-group">
                <div class="col-sm-2">
                    <label class="control-label" for="video_card">显卡型号：</label>
                </div>
                <div class="col-sm-5">
                    <input type="text" class="form-control" id="video_card">
                </div>
                <div class="col-sm-5 help-block"></div>
            </div>
            <div class="form-group">
                <div class="col-sm-2">
                    <label class="control-label" for="cpu">处理器：</label>
                </div>
                <div class="col-sm-5">
                    <input type="text" class="form-control" id="cpu">
                </div>
                <div class="col-sm-5 help-block"></div>
            </div>
            <div class="form-group">
                <div class="col-sm-2">
                    <label class="control-label" for="video_memory">显存容量：</label>
                </div>
                <div class="col-sm-5">
                    <input type="text" class="form-control" id="video_memory">
                </div>
                <div class="col-sm-5 help-block"></div>
            </div>
            <div class="form-group">
                <div class="col-sm-2">
                    <label class="control-label" for="category">所属分类：</label>
                </div>
                <div class="col-sm-5">
                    <input type="text" class="form-control" id="category">
                </div>
                <div class="col-sm-5 help-block"></div>
            </div>
            <div class="form-group">
                <div class="col-sm-2">
                    <label class="control-label" for="disk">磁盘类型：</label>
                </div>
                <div class="col-sm-5">
                    <input type="text" class="form-control" id="disk">
                </div>
                <div class="col-sm-5 help-block"></div>
            </div>
            <div class="form-group">
                <div class="col-sm-2">
                    <label class="control-label">是否促销：</label>
                </div>
                <div class="col-sm-5">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" id="is_onsale">
                        </label>
                    </div>
                </div>
                <div class="col-sm-5 help-block"></div>
            </div>
            <div class="form-group">
                <div class="col-sm-2">
                    <label class="control-label">详细说明：</label>
                </div>
                <div class="col-sm-10">
                    <textarea name="details" id="details" class="form-control" style="height: 10em;"></textarea>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-10 col-sm-offset-2">
                    <input type="button" value="提交" class="btn btn-success">
                </div>
            </div>

        </form>
    </div>
</template>
<script>
    export default{
        data(){
            return {}
        },
        components: {},
        methods: {

        },
        computed: {},
        watch: {},
        mounted(){}
    }
</script>