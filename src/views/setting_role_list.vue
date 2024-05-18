<template>
  <div id="app" style="width:100%">
    <el-container v-loading.fullscreen.lock="false">

      <el-main class="mainMain">
        <el-button style="margin-bottom: 10px;" @click="showAddDialog()" type="primary" size="small">添加角色
        </el-button>
        <el-table
            :data="roleList"
            border
            style="width: 100%">
          <el-table-column
              prop="role_name"
              label="角色名称">
          </el-table-column>
          <el-table-column
              prop="method"
              label="允许方法">
          </el-table-column>
          <el-table-column
              prop="path"
              label="路径">
          </el-table-column>
          <el-table-column
              prop="id"
              label="操作">
            <template slot-scope="scope">
              <el-button @click="showAuthDialog(scope.row.role_id,scope.row.role_name,scope.row.method,scope.row.path)"
                         type="primary" size="small" plain>配置权限
              </el-button>
              <el-button @click="showDeleteDialog(scope.row.role_id)"
                         type="primary" size="small" plain>删除客服
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>

    </el-container>
    <el-dialog
        title="添加角色"
        :visible.sync="addDialog"
        width="30%"
    >
      <el-form ref="addForm" :model="addForm" :rules="rules" label-width="70px">
        <el-form-item label="角色名" prop="name">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="方法" prop="method">
          <el-input v-model="addForm.method"></el-input>
        </el-form-item>
        <el-form-item label="路径" prop="path">
          <el-input type="textarea" v-model="addForm.path"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
                <el-button @click="addDialog = false">取 消</el-button>
                <el-button type="primary" @click="submitAddForm('addForm')">确 定</el-button>
              </span>
    </el-dialog>
    <el-dialog
        title="配置权限"
        :visible.sync="roleDialog"
        width="30%"
    >
      <el-form ref="roleForm" :model="roleForm" :rules="rules" label-width="70px">
        <el-form-item label="角色名" prop="name">
          <el-input v-model="roleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="方法" prop="method">
          <el-input v-model="roleForm.method"></el-input>
        </el-form-item>
        <el-form-item label="路径" prop="path">
          <el-input type="textarea" v-model="roleForm.path"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
                <el-button @click="roleDialog = false">取 消</el-button>
                <el-button type="primary" @click="submitRoleForm('roleForm')">确 定</el-button>
              </span>
    </el-dialog>
    <el-dialog
        title="确认"
        :visible.sync="deleteDialog"
        width="30%"
    >
      确认要删除吗？
      <span slot="footer" class="dialog-footer">
                <el-button @click="deleteDialog = false">取 消</el-button>
                <el-button type="primary" @click="deleteRole()">确 定</el-button>
              </span>
    </el-dialog>
  </div>
</template>


<script>
import {sendAjax} from "../../public/static/js/functions";

export default {
  data() {
    return {
      rules: {
        server: [
          {required: true, message: '请输入服务地址', trigger: 'blur'},
        ],
        port: [
          {required: true, message: '请输入端口号', trigger: 'blur'},
        ],
        database: [
          {required: true, message: '请输入数据库名', trigger: 'blur'},
        ],
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
        ],
        name: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
        ],
        avator: [
          {required: true, message: '请选择头像', trigger: 'blur'},
        ],
        role_id: [
          {required: true, message: '请选择角色', trigger: 'blur'},
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
        ],
        nickname: [
          {required: true, message: '请输入昵称', trigger: 'blur'},
        ],
        method: [
          {required: true, message: '请输入允许的方法', trigger: 'blur'},
        ],
        path: [
          {required: true, message: '请输入允许的路径', trigger: 'blur'},
        ],
      },
      roleList: [],
      roleForm: {
        id: "",
        name: "",
        method: "",
        path: "",
      },
      addForm: {
        name: "",
        method: "",
        path: "",
      },
      roleDialog: false,
      addDialog: false,
      deleteDialog: false,
      role_id: null,
    }
  },
  methods: {
    deleteRole() {
      let _this = this;
      sendAjax("/delete_role", "get", {"role_id": _this.role_id}, function (result) {
        if (result.code == 200) {
          sendAjax("/roles", "get", {}, function (result) {
            _this.roleList = result;
          });
          _this.$message({
            message: result.msg,
            type: 'success'
          });
        } else {
          _this.$message({
            message: result.msg,
            type: 'error'
          });
        }
      });
      this.deleteDialog=false
    },
    showDeleteDialog(role_id) {
      this.deleteDialog = true
      this.role_id = role_id
    },
    submitAddForm(formName) {
      let _this = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          sendAjax("/add_role", "POST", _this.addForm, function (result) {
            _this.addDialog = false;
            sendAjax("/roles", "get", {}, function (result) {
              _this.roleList = result;
            });
            _this.$message({
              message: result.msg,
              type: 'success'
            });
          });
          _this.addForm = {
            name: "",
            method: "",
            path: "",
          }
        } else {
          return false;
        }
      });
    },
    //配置角色权限
    showAuthDialog(id, name, method, path) {
      this.roleForm.id = id
      this.roleForm.name = name
      this.roleForm.method = method
      this.roleForm.path = path
      this.roleDialog = true;
    },
    showAddDialog() {
      this.addDialog = true;
    },
    //提交角色表单
    submitRoleForm(formName) {
      let _this = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          sendAjax("/role", "POST", _this.roleForm, function (result) {
            _this.roleDialog = false;
            //修改成功后，重新获取列表
            sendAjax("/roles", "get", {}, function (result) {
              _this.roleList = result;
            });
            _this.$message({
              message: result.msg,
              type: 'success'
            });
          });
        } else {
          return false;
        }
      });
    },
  },
  created() {
    let _this = this
    sendAjax("/roles", "get", {}, function (result) {
      _this.roleList = result;
    });
  }
}
</script>