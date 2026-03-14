```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  template: `
    <div class="hero">
      <h1>Turn WhatsApp Voice Notes into Bookings</h1>
      <p>Streamline your booking process and never miss a customer again.</p>
      <button class="cta-button">Connect my WhatsApp</button>
    </div>
    <div class="features">
      <div class="feature-card">
        <h2>No missed bookings</h2>
        <p>Automatically convert voice notes into bookings and stay organized.</p>
      </div>
      <div class="feature-card">
        <h2>Automatic reminders</h2>
        <p>Send reminders to your customers and reduce no-shows.</p>
      </div>
      <div class="feature-card">
        <h2>Daily agenda on WhatsApp</h2>
        <p>Get a daily summary of your bookings and stay on top of your schedule.</p>
      </div>
    </div>
    <div class="footer">
      <p>Built for WhatsApp-first businesses</p>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      padding: 20px;
      max-width: 400px;
      margin: 0 auto;
      font-family: Arial, sans-serif;
    }
    .hero {
      background-color: #0097a7;
      color: #fff;
      padding: 20px;
      text-align: center;
      border-radius: 10px 10px 0 0;
    }
    .hero h1 {
      font-size: 24px;
      margin-bottom: 10px;
    }
    .hero p {
      font-size: 16px;
      margin-bottom: 20px;
    }
    .cta-button {
      background-color: #34c759;
      color: #fff;
      border: none;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      border-radius: 5px;
    }
    .features {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
    }
    .feature-card {
      background-color: #f7f7f7;
      padding: 20px;
      margin-bottom: 20px;
      border: 1px solid #ddd;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      width: 100%;
    }
    .feature-card h2 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    .feature-card p {
      font-size: 14px;
    }
    .footer {
      background-color: #0097a7;
      color: #fff;
      padding: 10px;
      text-align: center;
      clear: both;
      border-radius: 0 0 10px 10px;
    }
    @media (max-width: 768px) {
      :host {
        padding: 10px;
      }
      .hero {
        padding: 10px;
      }
      .features {
        padding: 10px;
      }
    }
  `]
})
export class LandingComponent {}
```