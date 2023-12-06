/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package main;

import com.google.gson.Gson;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import static javax.swing.JOptionPane.showMessageDialog;
import javax.swing.table.DefaultTableModel;

public class FrmUsuarios extends javax.swing.JFrame {

    /**
     * Creates new form FrmUsuarios
     */
    String api;
    int pos;
    
    public FrmUsuarios() {
        initComponents();
        this.api = "https://eco-api-amber.vercel.app/api/usuarios";
        this.obtener();
        this.pos = 0;
    }
    
    public void obtener() {
        try {
            // Crea la solicitud con método GET
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(this.api)) // Ajusta el endpoint según tu API
                    .header("Content-Type", "application/json; charset=utf-8")
                    .GET()
                    .build();

            // Crea el cliente y realiza la solicitud
            HttpClient client = HttpClient.newHttpClient();
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            
            if (response.statusCode() == 200) {
                
                if (response.body().contains("No hay registros")) {
                    return;
                }

                // Procesa la respuesta JSON y carga los datos en la JTable                
                String responseData = response.body();
                List<Map<String, Object>> data = new Gson().fromJson(responseData, List.class);

                // Limpia la JTable antes de cargar nuevos datos
                DefaultTableModel model = (DefaultTableModel) tbUsuarios.getModel();
                model.setRowCount(0);

                // Agrega cada fila de datos a la JTable
                for (Map<String, Object> row : data) {
                    model.addRow(row.values().toArray());
                }
            } else {
                System.out.println("Error: " + response.statusCode() + " - " + response.body());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
    public boolean insertar(String cedula, String nombre, String apellidos, String fechaNacimiento, String email) {
        try {
            Map<String, String> requestBodyMap = new HashMap<>();
            requestBodyMap.put("cedula", cedula);
            requestBodyMap.put("nombre", nombre);
            requestBodyMap.put("apellidos", apellidos);
            requestBodyMap.put("fechaNacimiento", fechaNacimiento);
            requestBodyMap.put("email", email);

            // Utiliza Gson para convertir el cuerpo de la solicitud a JSON
            String jsonRequestBody = new Gson().toJson(requestBodyMap);

            // Crea la solicitud con método POST y el cuerpo JSON
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(this.api))
                    .header("Content-Type", "application/json; charset=utf-8")
                    .POST(HttpRequest.BodyPublishers.ofString(jsonRequestBody))
                    .build();

            // Crea el cliente y realiza la solicitud
            HttpClient client = HttpClient.newHttpClient();
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            
            if (response.statusCode() == 200) {
                String responseData = response.body();
                return true;
            } else {
                System.out.println("Error: " + response.statusCode() + " - " + response.body());
                return false;
            }
        } catch (IOException | InterruptedException e) {
            return false;
        }
    }
    
    public boolean editar(String cedula, String email, String rol, String password) {
        try {
            Map<String, String> requestBodyMap = new HashMap<>();
            requestBodyMap.put("cedula", cedula);
            requestBodyMap.put("password", password);
            requestBodyMap.put("email", email);
            requestBodyMap.put("rol", rol);

            // Utiliza Gson para convertir el cuerpo de la solicitud a JSON
            String jsonRequestBody = new Gson().toJson(requestBodyMap);

            // Crea la solicitud con método POST y el cuerpo JSON
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(this.api))
                    .header("Content-Type", "application/json; charset=utf-8")
                    .PUT(HttpRequest.BodyPublishers.ofString(jsonRequestBody))
                    .build();

            // Crea el cliente y realiza la solicitud
            HttpClient client = HttpClient.newHttpClient();
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            
            if (response.statusCode() == 200) {
                String responseData = response.body();
                return true;
            } else {
                System.out.println("Error: " + response.statusCode() + " - " + response.body());
                return false;
            }
        } catch (IOException | InterruptedException e) {
            return false;
        }
    }
    
    public boolean eliminar(String cedula) {
        try {
            Map<String, String> requestBodyMap = new HashMap<>();
            requestBodyMap.put("cedula", cedula);
            // Utiliza Gson para convertir el cuerpo de la solicitud a JSON
            String jsonRequestBody = new Gson().toJson(requestBodyMap);
            // Crea la solicitud con método POST y el cuerpo JSON
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(this.api + ".php?cedula=" + cedula))
                    .header("Content-Type", "application/json; charset=utf-8")
                    .method("DELETE", HttpRequest.BodyPublishers.ofString(jsonRequestBody))
                    .build();
            // Crea el cliente y realiza la solicitud
            HttpClient client = HttpClient.newHttpClient();
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            
            if (response.statusCode() == 200) {
                String responseData = response.body();
                return true;
            } else {
                System.out.println("Error: " + response.statusCode() + " - " + response.body());
                return false;
            }
        } catch (IOException | InterruptedException e) {
            return false;
        }
    }
    
    public void limpiarCampos() {
        this.txtCedula.setText("");
        this.txtNombre.setText("");
        this.txtApellidos.setText("");
        this.txtFecha.setDate(null);
        this.txtCorreo.setText("");
        this.txtRol.setText("");
        
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        txtCedula = new javax.swing.JTextField();
        lblCedula = new javax.swing.JLabel();
        txtNombre = new javax.swing.JTextField();
        lblNombre = new javax.swing.JLabel();
        lblApellidos = new javax.swing.JLabel();
        txtApellidos = new javax.swing.JTextField();
        lblFecha = new javax.swing.JLabel();
        txtFecha = new com.toedter.calendar.JDateChooser();
        lblRol = new javax.swing.JLabel();
        txtRol = new javax.swing.JTextField();
        lblCorreo = new javax.swing.JLabel();
        txtCorreo = new javax.swing.JTextField();
        btnCrear = new javax.swing.JButton();
        btnEditar = new javax.swing.JButton();
        btnLimpiar = new javax.swing.JButton();
        btnEliminar = new javax.swing.JButton();
        jScrollPane1 = new javax.swing.JScrollPane();
        tbUsuarios = new javax.swing.JTable();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        lblCedula.setText("Cédula");

        lblNombre.setText("Nombre");

        lblApellidos.setText("Apellidos");

        lblFecha.setText("Fecha de Nacimiento");

        txtFecha.setDateFormatString("dd MM yyyy");

        lblRol.setText("Rol");

        txtRol.setEnabled(false);

        lblCorreo.setText("Correo Electronico");

        btnCrear.setText("Crear");
        btnCrear.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnCrearActionPerformed(evt);
            }
        });

        btnEditar.setText("Editar");
        btnEditar.setEnabled(false);
        btnEditar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnEditarActionPerformed(evt);
            }
        });

        btnLimpiar.setText("Limpiar");
        btnLimpiar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnLimpiarActionPerformed(evt);
            }
        });

        btnEliminar.setText("Eliminar");
        btnEliminar.setEnabled(false);
        btnEliminar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnEliminarActionPerformed(evt);
            }
        });

        tbUsuarios.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {
                {null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null}
            },
            new String [] {
                "Cedula", "Nombre", "Apellidos", "Fecha de Nacimiento", "Contraseña", "Correo", "Rol"
            }
        ) {
            boolean[] canEdit = new boolean [] {
                false, false, false, false, false, false, false
            };

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit [columnIndex];
            }
        });
        tbUsuarios.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                tbUsuariosMouseClicked(evt);
            }
        });
        jScrollPane1.setViewportView(tbUsuarios);

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(lblFecha)
                            .addGroup(layout.createSequentialGroup()
                                .addGap(5, 5, 5)
                                .addComponent(lblCedula))
                            .addComponent(txtFecha, javax.swing.GroupLayout.PREFERRED_SIZE, 151, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(txtCedula, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, 146, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addGap(18, 18, 18)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(txtCorreo)
                            .addComponent(txtNombre)
                            .addGroup(layout.createSequentialGroup()
                                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                    .addComponent(lblNombre)
                                    .addComponent(lblCorreo))
                                .addGap(0, 0, Short.MAX_VALUE)))
                        .addGap(12, 12, 12)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                            .addComponent(lblApellidos)
                            .addComponent(lblRol)
                            .addComponent(txtApellidos)
                            .addComponent(txtRol, javax.swing.GroupLayout.PREFERRED_SIZE, 164, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addGap(18, 18, 18)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                            .addComponent(btnLimpiar, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                            .addComponent(btnEditar, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                            .addComponent(btnCrear, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                            .addComponent(btnEliminar, javax.swing.GroupLayout.DEFAULT_SIZE, 132, Short.MAX_VALUE))
                        .addContainerGap())
                    .addComponent(jScrollPane1, javax.swing.GroupLayout.DEFAULT_SIZE, 660, Short.MAX_VALUE)))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addGap(41, 41, 41)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                            .addGroup(layout.createSequentialGroup()
                                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING, false)
                                    .addGroup(layout.createSequentialGroup()
                                        .addComponent(lblNombre, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                        .addComponent(txtNombre, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                                    .addGroup(javax.swing.GroupLayout.Alignment.LEADING, layout.createSequentialGroup()
                                        .addComponent(lblCedula)
                                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                        .addComponent(txtCedula, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)))
                                .addGap(18, 18, 18)
                                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                    .addGroup(layout.createSequentialGroup()
                                        .addComponent(lblCorreo)
                                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                        .addComponent(txtCorreo, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                                    .addGroup(layout.createSequentialGroup()
                                        .addComponent(lblFecha)
                                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                        .addComponent(txtFecha, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))))
                            .addGroup(layout.createSequentialGroup()
                                .addComponent(lblApellidos)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(txtApellidos, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(18, 18, 18)
                                .addComponent(lblRol)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(txtRol, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)))
                        .addGap(23, 23, 23))
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                        .addContainerGap()
                        .addComponent(btnCrear)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(btnEditar)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(btnLimpiar)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(btnEliminar)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)))
                .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 249, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void btnCrearActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnCrearActionPerformed
        Date fecha = txtFecha.getDate();
        DateFormat dateFormat = new SimpleDateFormat("yyyy-mm-dd");

//        System.out.println(dateFormat.format(fecha));
        String cedula = txtCedula.getText();
        String nombre = txtNombre.getText();
        String apellidos = txtApellidos.getText();
        String fechaNacimiento = dateFormat.format(fecha);
        String correo = txtCorreo.getText();
        Boolean res = insertar(cedula, nombre, apellidos, fechaNacimiento, correo);
        showMessageDialog(null, (res) ? "Usuario insertado" : "Algo salió mal");
        this.obtener();
        limpiarCampos();
    }//GEN-LAST:event_btnCrearActionPerformed

    private void tbUsuariosMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_tbUsuariosMouseClicked
        this.pos = tbUsuarios.getSelectedRow();
        
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        
        try {
            this.txtRol.setEnabled(true);
            this.txtCedula.setEnabled(false);
            this.txtNombre.setEnabled(false);
            this.txtApellidos.setEnabled(false);
            this.txtFecha.setEnabled(false);
            
            this.txtCedula.setText(tbUsuarios.getValueAt(this.pos, 0).toString());
            this.txtNombre.setText(tbUsuarios.getValueAt(this.pos, 1).toString());
            this.txtApellidos.setText(tbUsuarios.getValueAt(this.pos, 2).toString());
            this.txtFecha.setDate(dateFormat.parse(tbUsuarios.getValueAt(this.pos, 3).toString()));
            this.txtCorreo.setText(tbUsuarios.getValueAt(this.pos, 5).toString());
            this.txtRol.setText(tbUsuarios.getValueAt(this.pos, 6).toString());
            
            this.btnEliminar.setEnabled(true);
            this.btnEditar.setEnabled(true);
            this.btnCrear.setEnabled(false);
        } catch (ParseException e) {
            e.printStackTrace(); // Handle the ParseException as needed
        }
    }//GEN-LAST:event_tbUsuariosMouseClicked

    private void btnEditarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnEditarActionPerformed
        String cedula = txtCedula.getText();
        String correo = txtCorreo.getText();
        String rol = txtRol.getText();
        Boolean res = editar(cedula, correo, rol, tbUsuarios.getValueAt(this.pos, 4).toString());
        showMessageDialog(null, (res) ? "Usuario Editado" : "Algo salió mal");
        this.obtener();
        limpiarCampos();
    }//GEN-LAST:event_btnEditarActionPerformed

    private void btnEliminarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnEliminarActionPerformed
        String cedula = txtCedula.getText();
        Boolean res = this.eliminar(cedula);
        
        showMessageDialog(null, (res) ? "Usuario eliminado" : "Algo salió mal");
        this.obtener();
        limpiarCampos();
    }//GEN-LAST:event_btnEliminarActionPerformed

    private void btnLimpiarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnLimpiarActionPerformed
        this.txtApellidos.setEnabled(true);
        this.txtNombre.setEnabled(true);
        this.txtCedula.setEnabled(true);
        this.txtRol.setEnabled(false);
        
        this.pos = 0;
        limpiarCampos();
    }//GEN-LAST:event_btnLimpiarActionPerformed

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(FrmUsuarios.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(FrmUsuarios.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(FrmUsuarios.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(FrmUsuarios.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new FrmUsuarios().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton btnCrear;
    private javax.swing.JButton btnEditar;
    private javax.swing.JButton btnEliminar;
    private javax.swing.JButton btnLimpiar;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JLabel lblApellidos;
    private javax.swing.JLabel lblCedula;
    private javax.swing.JLabel lblCorreo;
    private javax.swing.JLabel lblFecha;
    private javax.swing.JLabel lblNombre;
    private javax.swing.JLabel lblRol;
    private javax.swing.JTable tbUsuarios;
    private javax.swing.JTextField txtApellidos;
    private javax.swing.JTextField txtCedula;
    private javax.swing.JTextField txtCorreo;
    private com.toedter.calendar.JDateChooser txtFecha;
    private javax.swing.JTextField txtNombre;
    private javax.swing.JTextField txtRol;
    // End of variables declaration//GEN-END:variables
}
