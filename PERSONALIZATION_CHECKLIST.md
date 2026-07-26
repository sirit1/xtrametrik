# 🎨 Checklist de Personalización

Use este checklist para personalizar la landing page para xtrametrik.com.

## Sección 1: Branding (10 minutos)

### Colores
- [ ] Editar `/app/globals.css`
- [ ] Cambiar `--primary` (azul actual: `#003B7A`)
- [ ] Cambiar `--accent` (dorado actual: `#D4AF37`)
- [ ] Cambiar `--foreground` y `--background` si aplica
- [ ] Verificar en navegador (pase localhost:3000)

### Logo & Favicon
- [ ] Reemplazar logo en `/components/header.tsx` (línea 18-19)
- [ ] Cambiar texto "X" por tu logo o iniciales
- [ ] Actualizar `/public/favicon.ico`

### Tipografía (Opcional)
- [ ] Cambiar fonts en `/app/layout.tsx` si deseas diferentes
- [ ] Por defecto: Geist Sans + Geist Mono (muy bien diseñadas)

---

## Sección 2: Contenido (20 minutos)

### Header
**Archivo:** `/components/header.tsx`

- [ ] Actualizar nombre de empresa en línea 14
- [ ] Actualizar nav links si es necesario (líneas 16-20)
- [ ] Cambiar CTA "Comenzar" si deseas otro texto

### Hero
**Archivo:** `/components/hero.tsx`

- [ ] Cambiar headline principal (línea 14)
- [ ] Actualizar subtítulo (línea 16-17)
- [ ] Cambiar texto de CTA botones (líneas 20-23)
- [ ] Actualizar números de confianza (líneas 35-41):
  - [ ] Cambiar "10K+" empresas
  - [ ] Cambiar "99.9%" disponibilidad
  - [ ] Cambiar "24/7" soporte

### Features
**Archivo:** `/components/features.tsx`

- [ ] Cambiar "Características Poderosas" heading si deseas
- [ ] Para cada característica, actualizar:
  - [ ] Nombre (title)
  - [ ] Descripción (description)
  - [ ] Icono si deseas diferente

Características actuales:
1. ☑️ Dashboards Inteligentes
2. ⚡ Análisis Instantáneo
3. 🛡️ Seguridad Empresarial
4. 📈 Predicciones Precisas
5. 🔗 Conectividad Total
6. 👥 Colaboración en Equipo

### Benefits
**Archivo:** `/components/benefits.tsx`

- [ ] Cambiar "Beneficios que transforman tu negocio" heading
- [ ] Actualizar subtítulo (línea 21-22)
- [ ] Cambiar cada beneficio:
  - [ ] "Aumenta ingresos hasta un 35%..."
  - [ ] "Reduce costos operativos..."
  - [ ] "Mejora el time-to-market..."
  - [ ] "Detecta oportunidades..."
  - [ ] "Automatiza reportes..."
  - [ ] "ROI comprobado..."
- [ ] Cambiar "+250%" stat si aplica (línea 59)
- [ ] Actualizar números de prueba social (líneas 63-65)

### Pricing
**Archivo:** `/components/pricing.tsx`

- [ ] Cambiar precios en objeto `plans` (líneas 9-50):
  - [ ] Starter: $99 → tu precio
  - [ ] Professional: $499 → tu precio
  - [ ] Enterprise: "Personalizado" → tu texto
- [ ] Actualizar cantidad de usuarios por plan
- [ ] Actualizar registros/límites de datos
- [ ] Cambiar features de cada plan
- [ ] Adjudicar el badge "MÁS POPULAR" al plan que desees

### CTA (Contact Form)
**Archivo:** `/components/cta.tsx`

- [ ] Cambiar headline principal (línea 17)
- [ ] Cambiar descripción (línea 18-19)
- [ ] Cambiar placeholder del email (línea 26)
- [ ] Cambiar botón "Comenzar Ahora" → tu CTA
- [ ] Cambiar mensaje de éxito (línea 34)

### Footer
**Archivo:** `/components/footer.tsx`

- [ ] Cambiar "Inteligencia de datos para empresas que crecen" (línea 31)
- [ ] Actualizar links en cada columna (líneas 36-62)
- [ ] Cambiar URLs de redes sociales (líneas 69-87)
- [ ] Actualizar email: "info@xtrametrik.com" (línea 82)
- [ ] Cambiar copyright text (línea 113)
- [ ] Cambiar dominio: "xtrametrik.com" (línea 117)

---

## Sección 3: Metadatos (5 minutos)

### SEO Basics
**Archivo:** `/app/layout.tsx`

- [ ] Cambiar title: "XtraMetrik - Inteligencia de Datos..."
- [ ] Cambiar description meta tag
- [ ] Cambiar keywords si deseas
- [ ] Actualizar og:title, og:description

Líneas afectadas: 8-15

---

## Sección 4: Formulario (15 minutos)

### Integración de Email

**Opción A: Zoho CRM** (Recomendado)
```javascript
// En /components/cta.tsx línea 11-15
const handleSubmit = async (e) => {
  // Integración con Zoho CRM
  // Tu código aquí
}
```

**Opción B: Mailchimp**
```javascript
// Agregar tu API key de Mailchimp
// Llamar endpoint de Mailchimp
```

**Opción C: SendGrid**
```javascript
// Tu código SendGrid aquí
```

- [ ] Elegir proveedor de email
- [ ] Obtener credenciales/API keys
- [ ] Actualizar `/components/cta.tsx` con lógica
- [ ] Testear con email de prueba
- [ ] Verificar que emails llegan correctamente

---

## Sección 5: Imágenes (5 minutos)

### Optimizar Imágenes
- [ ] Agregar logo actual a `/public/brand/`
- [ ] Agregar favicon a `/public/`
- [ ] Verificar que todas las imágenes cargan

**Nota:** Actualmente sin imágenes de ilustración (solo iconos). 
Si deseas agregar:
- [ ] Usar generador de imágenes IA o diseñador
- [ ] Guardar en `/public/images/`
- [ ] Importar en componentes relevantes

---

## Sección 6: Despliegue (30 minutos)

### Pre-Despliegue Check
- [ ] Todo contenido actualizado ✓
- [ ] Colores personalizados ✓
- [ ] Formulario integrado ✓
- [ ] Links funcionando ✓
- [ ] Mobile responsive ✓
- [ ] Performance bueno (test local)

### Build
```bash
npm run build
# Si no hay errores, listo para deploy
```

- [ ] Build sin errores
- [ ] Verificar que `.next` fue creado

### Despliegue

#### Si usas Vercel:
- [ ] Conectar GitHub repo
- [ ] Importar en Vercel
- [ ] Agregar xtrametrik.com en Custom Domains
- [ ] Actualizar DNS en Zoho

#### Si usas Zoho:
- [ ] Subir `.next` folder
- [ ] Configurar Node.js
- [ ] Actualizar DNS
- [ ] Test en producción

- [ ] Verificar HTTPS/SSL funcionando
- [ ] Verificar emails llegando
- [ ] Verificar analytics conectado

---

## Sección 7: Post-Despliegue (20 minutos)

### Analytics
- [ ] Crear cuenta Google Analytics
- [ ] Obtener ID (GA-XXXXX)
- [ ] Copiar ID en `/app/layout.tsx`
- [ ] Esperar 24h para ver datos

### Monitoreo
- [ ] Agregar xtrametrik.com a Google Search Console
- [ ] Enviar sitemap
- [ ] Monitorear Core Web Vitals
- [ ] Verificar no hay 404s

### Emails
- [ ] Verificar que emails se guardan correctamente
- [ ] Configurar auto-reply si aplica
- [ ] Agregar nuevos emails a CRM

---

## Tiempo Total

| Sección | Tiempo |
|---------|--------|
| Branding | 10 min |
| Contenido | 20 min |
| Metadatos | 5 min |
| Formulario | 15 min |
| Imágenes | 5 min |
| Despliegue | 30 min |
| Post-Despliegue | 20 min |
| **TOTAL** | **105 min (~2 horas)** |

---

## Debugging Tips

### Si algo no funciona:

**Estilos sin aplicarse:**
```bash
# Limpiar Next.js cache
rm -rf .next
npm run dev
```

**Componente no renderiza:**
- Revisar console en DevTools
- Verificar sintaxis TypeScript
- Compilar: `npm run build`

**Email no se guarda:**
- Revisar endpoint en CTA component
- Verificar CORS si es cross-origin
- Revisar logs del servidor

**Layout roto en mobile:**
- Revisar clases Tailwind responsive
- Inspeccionar con DevTools mobile view
- Verificar viewport en layout.tsx

---

## Archivos Claves para Editar

Orden recomendado de edición:

1. `/app/globals.css` - Colores
2. `/components/header.tsx` - Logo y nav
3. `/components/hero.tsx` - Headline principal
4. `/components/features.tsx` - Características
5. `/components/benefits.tsx` - Beneficios
6. `/components/pricing.tsx` - Precios
7. `/components/cta.tsx` - Formulario
8. `/components/footer.tsx` - Footer
9. `/app/layout.tsx` - Metadatos y analytics

---

## ✅ Final Verification

Antes de considerar "completado":

- [ ] Todo el contenido está actualizado
- [ ] Colores personalizados
- [ ] Formulario funciona (test con email)
- [ ] Mobile responsive (probar en 375px)
- [ ] Desktop view perfecto
- [ ] Links funcionando
- [ ] Analytics conectado
- [ ] Desplegado en xtrametrik.com
- [ ] HTTPS/SSL funcionando
- [ ] Emails llegando a inbox

---

## 🎉 ¡Listo!

Una vez completado este checklist, tu landing page está 100% lista para recibir visitantes y convertirlos en leads.

**Tiempo total:** ~2 horas  
**Dificultad:** Baja (editar textos + cambiar colores)  
**Resultado:** Landing page professional y funcional

---

**Preguntas?** Revisar QUICK_START.md o DEPLOYMENT.md

**Necesitas ayuda con código?** Los comentarios están en los archivos .tsx
